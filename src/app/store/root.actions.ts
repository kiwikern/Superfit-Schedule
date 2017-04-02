/**
 * Created by Kim on 02.04.2017.
 */
 import { Injectable } from '@angular/core';

@Injectable()
export class RootActions {
  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEDED = 'LOAD_SUCCEDED';
  static readonly LOAD_FAILED= 'LOAD_FAILED';

  loadSchedule() {
    return {
      type: RootActions.LOAD_STARTED
    };
  }

  loadSucceded(payload) {
    return {
      type: RootActions.LOAD_SUCCEDED,
      payload
    };
  }

  loadFailed(error) {
    return {
      type: RootActions.LOAD_FAILED,
      error
    };
  }


}
