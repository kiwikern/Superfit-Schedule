import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ScheduleActions } from './schedule.actions';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { ClassComment } from '../../../comment/class-comment';
import { HttpClient } from '@angular/common/http';

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
      .switchMap(action => this.postComment(action.payload)
        .flatMap(scheduleJSON => of(this.actions.addCommentSuccess(), this.actions.loadSchedule()))
        .catch(error => of(this.actions.addCommentFail(error)))
      );
  }

  private postComment(comment: ClassComment) {
    const url = '/api/sfs/schedule/comment';
    comment.userId = this.userId;
    comment.userName = this.userName;
    return this.http.post(url, {comment});
  }
}
