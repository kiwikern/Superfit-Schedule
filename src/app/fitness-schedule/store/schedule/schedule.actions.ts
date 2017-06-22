/**
 * Created by Kim on 02.04.2017.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ScheduleActions {
  static readonly SCHEDULE_LOAD_STARTED = 'SCHEDULE_LOAD_STARTED';
  static readonly SCHEDULE_LOAD_SUCCEDED = 'SCHEDULE_LOAD_SUCCEDED';
  static readonly SCHEDULE_LOAD_FAILED= 'SCHEDULE_LOAD_FAILED';

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


}
