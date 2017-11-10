import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { ScheduleActions } from './schedule.actions';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { ClassComment } from '../../../comment/class-comment';
import { HttpClient } from '@angular/common/http';
import { catchError, flatMap, switchMap } from 'rxjs/operators';
import { IPayloadAction } from '../../../store/payload-action.types';

@Injectable()
export class CommentsEpics {

  @select(['authentication', 'userName'])
  userName$: Observable<string>;
  userName: string;
  @select(['authentication', 'userId'])
  userId$: Observable<string>;
  userId: string;

  constructor(private actions: ScheduleActions,
              private http: HttpClient) {
    this.userName$.subscribe(userName => this.userName = userName);
    this.userId$.subscribe(userId => this.userId = userId);
  }

  createEpics() {
    return action$ => action$
      .ofType(ScheduleActions.COMMENT_ADDED_REQUEST)
      .pipe(
        switchMap((action: IPayloadAction<any>) => this.postComment(action.payload)
          .pipe(
            flatMap(scheduleJSON => of(this.actions.addCommentSuccess(), this.actions.loadSchedule())),
            catchError(error => of(this.actions.addCommentFail(error)))
          )));
  }

  private postComment(comment: ClassComment) {
    const url = '/api/sfs/schedule/comment';
    comment.userId = this.userId;
    comment.userName = this.userName;
    return this.http.post(url, {comment});
  }
}
