/**
 * Created by Kim on 02.04.2017.
 */
import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Angulartics2 } from 'angulartics2';
import { ClassComment } from '../../../comment/class-comment';

@Injectable()
export class ScheduleActions {
  static readonly SCHEDULE_LOAD_STARTED = 'SCHEDULE_LOAD_STARTED';
  static readonly SCHEDULE_LOAD_SUCCEDED = 'SCHEDULE_LOAD_SUCCEDED';
  static readonly SCHEDULE_LOAD_FAILED= 'SCHEDULE_LOAD_FAILED';
  static readonly COMMENT_ADDED_REQUEST = 'COMMENT_ADDED_REQUEST';
  static readonly COMMENT_ADDED_SUCCESS = 'COMMENT_ADDED_SUCCESS';
  static readonly COMMENT_ADDED_FAIL = 'COMMENT_ADDED_FAIL';

  constructor(private angulartics: Angulartics2) {
  }

  loadSchedule() {
    return {
      type: ScheduleActions.SCHEDULE_LOAD_STARTED
    };
  }

  loadSucceded(payload) {
    return {
      type: ScheduleActions.SCHEDULE_LOAD_SUCCEDED,
      payload
    };
  }

  loadFailed(error) {
    return {
      type: ScheduleActions.SCHEDULE_LOAD_FAILED,
      error
    };
  }

  @dispatch()
  addComment(payload: ClassComment) {
    this.angulartics.eventTrack.next({action: 'addComment', properties: {category: payload.text}});
    return {
      type: ScheduleActions.COMMENT_ADDED_REQUEST,
      payload
    };
  }

  addCommentSuccess() {
    return {
      type: ScheduleActions.COMMENT_ADDED_SUCCESS
    };
  }

  addCommentFail(error) {
    return {
      type: ScheduleActions.COMMENT_ADDED_FAIL,
      error
    };
  }

}
