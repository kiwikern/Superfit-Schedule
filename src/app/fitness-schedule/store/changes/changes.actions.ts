import { Injectable } from '@angular/core';

@Injectable()
export class ChangesActions {
  static readonly CHANGE_LOAD_STARTED = 'CHANGE_LOAD_STARTED';
  static readonly CHANGE_LOAD_SUCCEDED = 'CHANGE_LOAD_SUCCEDED';
  static readonly CHANGE_LOAD_FAILED= 'CHANGE_LOAD_FAILED';

  loadChanges() {
    return {
      type: ChangesActions.CHANGE_LOAD_STARTED
    };
  }

  loadSucceded(payload) {
    return {
      type: ChangesActions.CHANGE_LOAD_SUCCEDED,
      payload
    };
  }

  loadFailed(error) {
    return {
      type: ChangesActions.CHANGE_LOAD_FAILED,
      error
    };
  }


}
