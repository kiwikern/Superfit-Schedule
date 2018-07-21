import { Injectable } from '@angular/core';
import { FeedbackActions } from './feedback.actions';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { of ,  Observable } from 'rxjs';
import { FeedbackPayload } from './feedback-payload-interface';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../feedback-interface';
import { select } from '@angular-redux/store';
import { Router } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IPayloadAction } from '../../store/payload-action.types';
import { AuthService } from '../../authentication/store/auth-service/auth.service';
import { FeedbackService } from './feedback.service';
import { combineEpics, ofType } from 'redux-observable';

@Injectable()
export class FeedbackEpics {

  public epics;
  @select(['authentication', 'userId']) readonly userId$: Observable<string>;
  private userId: string;
  @select(['authentication', 'userName']) readonly userName$: Observable<string>;
  private userName: string;
  @select(['releasenotes', 'version']) readonly version$: Observable<string>;
  private version: string;

  constructor(private http: HttpClient,
              private actions: FeedbackActions,
              private snackBar: MatSnackBar,
              private authService: AuthService,
              private feedbackService: FeedbackService,
              private router: Router) {
    this.userId$.subscribe(userId => this.userId = userId);
    this.userName$.subscribe(userName => this.userName = userName);
    this.version$.subscribe(version => this.version = version);
    const sendRequest = action$ => action$
      .pipe(
        ofType(FeedbackActions.SEND_FEEDBACK_REQUEST),
        map((action: IPayloadAction<any>) => action.payload),
        switchMap((payload: FeedbackPayload) => this.sendFeedback(payload.feedback)
          .pipe(map(() => {
              this.actions.loadFeedback();
              return this.actions.sendFeedbackSuccess();
            }),
            catchError(error => {
              this.showErrorMessage(error, 'Senden');
              return of(this.actions.sendFeedbackError(error));
            }))));

    const sendResponseRequest = action$ => action$
      .pipe(
        ofType(FeedbackActions.SEND_RESPONSE_REQUEST),
        map((action: IPayloadAction<any>) => action.payload),
        switchMap((payload: FeedbackPayload) => this.sendResponse(payload.response)
          .pipe(
            map(() => {
              this.actions.loadFeedback();
              return this.actions.sendFeedbackSuccess();
            }),
            catchError(error => {
              this.showErrorMessage(error, 'Senden');
              return of(this.actions.sendFeedbackError(error));
            }))));

    const loadRequest = action$ => action$
      .pipe(
        ofType(FeedbackActions.LOAD_FEEDBACK_REQUEST),
        map((action: IPayloadAction<any>) => action.payload),
        switchMap((payload: FeedbackPayload) => this.loadFeedback()
          .pipe(
            map(response => {
              this.checkUnreadResponses(response.feedbackList);
              return this.actions.loadFeedbackSuccess(response.feedbackList);
            }),
            catchError(error => {
              // this.showErrorMessage(error, 'Laden');
              return of(this.actions.loadFeedbackError(error));
            }))));

    const markRead = action$ => action$
      .pipe(
        ofType(FeedbackActions.MARK_FEEDBACK_READ_REQUEST),
        map((action: IPayloadAction<any>) => action.payload),
        switchMap((payload: FeedbackPayload) => this.markRead(payload.feedbackId)
          .pipe(
            map(response => {
              return this.actions.markFeedbackReadSuccess();
            }),
            catchError(error => {
              return of(this.actions.markFeedbackReadError(error));
            }))));
    this.epics = combineEpics(markRead, loadRequest, sendResponseRequest, sendRequest);

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
    let url: string;
    if (!this.authService.isAdmin()) {
      url = `/api/sfs/feedback/${this.userId}`;
    } else {
      url = `/api/sfs/feedback`;
    }
    return this.http.get<FeedbackPayload>(url);
  }

  private markRead(feedbackId: string): Observable<FeedbackPayload> {
    const url = `/api/sfs/feedback/markread`;
    return this.http.post<FeedbackPayload>(url, {feedbackId});
  }

  private checkUnreadResponses(feedbackList: Feedback[]) {
    const hasUnreadFeedback: boolean = feedbackList
      .map(feedback => this.feedbackService.isUnread(feedback))
      .reduce((fst, snd) => fst || snd, false);
    if (hasUnreadFeedback) {
      const snackBar: MatSnackBarRef<SimpleSnackBar> = this.snackBar.open('Du hast ungelesene Nachrichten.',
        'Zu Feedback', {duration: 10000});
      const subscription = snackBar.onAction().subscribe(() => {
        this.router.navigate(['/feedback']);
        subscription.unsubscribe();
      });
    }
  }

}
