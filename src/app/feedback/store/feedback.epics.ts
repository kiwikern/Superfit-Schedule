import { Injectable } from '@angular/core';
import { FeedbackActions } from './feedback.actions';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { of } from 'rxjs/observable/of';
import { FeedbackPayload } from './feedback-payload-interface';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../feedback-interface';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { Router } from '@angular/router';
import { FeedbackResponse } from '../response-interface';

@Injectable()
export class FeedbackEpics {

  @select(['authentication', 'userId']) readonly userId$: Observable<string>;
  private userId: string;
  @select(['authentication', 'userName']) readonly userName$: Observable<string>;
  private userName: string;
  @select(['releasenotes', 'version']) readonly version$: Observable<string>;
  private version: string;

  constructor(private http: HttpClient,
              private actions: FeedbackActions,
              private snackBar: MatSnackBar,
              private router: Router) {
    this.userId$.subscribe(userId => this.userId = userId);
    this.userName$.subscribe(userName => this.userName = userName);
    this.version$.subscribe(version => this.version = version);
  }

  createEpics() {
    return [
      action$ => action$
        .ofType(FeedbackActions.SEND_FEEDBACK_REQUEST)
        .map(action => action.payload)
        .switchMap((payload: FeedbackPayload) => this.sendFeedback(payload.feedback)
          .map(() => {
            this.actions.loadFeedback();
            return this.actions.sendFeedbackSuccess();
          })
          .catch(error => {
            this.showErrorMessage(error, 'Senden');
            return of(this.actions.sendFeedbackError(error));
          })),
      action$ => action$
        .ofType(FeedbackActions.SEND_RESPONSE_REQUEST)
        .map(action => action.payload)
        .switchMap((payload: FeedbackPayload) => this.sendResponse(payload.response)
          .map(() => {
            this.actions.loadFeedback();
            return this.actions.sendFeedbackSuccess();
          })
          .catch(error => {
            this.showErrorMessage(error, 'Senden');
            return of(this.actions.sendFeedbackError(error));
          })),
      action$ => action$
        .ofType(FeedbackActions.LOAD_FEEDBACK_REQUEST)
        .map(action => action.payload)
        .switchMap((payload: FeedbackPayload) => this.loadFeedback()
          .map(response => {
            this.checkUnreadResponses(response.feedbackList);
            return this.actions.loadFeedbackSuccess(response.feedbackList);
          })
          .catch(error => {
            // this.showErrorMessage(error, 'Laden');
            return of(this.actions.loadFeedbackError(error));
          })),
      action$ => action$
        .ofType(FeedbackActions.MARK_FEEDBACK_READ_REQUEST)
        .map(action => action.payload)
        .switchMap((payload: FeedbackPayload) => this.markRead(payload.feedbackId)
          .map(response => {
            return this.actions.markFeedbackReadSuccess();
          })
          .catch(error => {
            return of(this.actions.markFeedbackReadError(error));
          }))
    ];
  }


  private showErrorMessage(error, action: string) {
    let errorInfo: string;
    if (error.status === 500) {
      errorInfo = 'Versuche es später erneut.';
    } else if (error.status === 0) {
      errorInfo = 'Keine Internetverbindung?';
    }
    const errorMessage = `${action} von Feedback fehlgeschlagen.`;
    this.showSnackBar(`${errorMessage}${errorInfo ? ' ' + errorInfo : ''}`);
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {duration: 5000});
  }

  private sendFeedback(feedback) {
    const url = '/api/sfs/feedback';
    return this.http.post(url, {userId: this.userId, userName: this.userName, version: this.version, feedback});
  }

  private sendResponse(response) {
    const url = '/api/sfs/feedback/response';
    response.userId = this.userId;
    return this.http.post(url, response);
  }

  private loadFeedback(): Observable<FeedbackPayload> {
    const url = `/api/sfs/feedback/${this.userId}`;
    return this.http.get<FeedbackPayload>(url);
  }

  private markRead(feedbackId: string): Observable<FeedbackPayload> {
    const url = `/api/sfs/feedback/markread`;
    return this.http.post<FeedbackPayload>(url, {feedbackId});
  }

  private checkUnreadResponses(feedbackList: Feedback[]) {
    const responses: FeedbackResponse[] = feedbackList
      .map(feedback => feedback.responses)
      .reduce((fst, snd) => fst.concat(snd), []);
    const unreadCount = responses.filter(response => response && !response.isRead).length;
    if (unreadCount > 0) {
      const snackBar: MatSnackBarRef<SimpleSnackBar> = this.snackBar.open('Du hast ungelesene Nachrichten.',
        'Zu Feedback', {duration: 10000});
      const subscription = snackBar.onAction().subscribe(() => {
        this.router.navigate(['/feedback']);
        subscription.unsubscribe();
      });
    }
  }

}
