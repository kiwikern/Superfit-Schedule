import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

@Injectable()
export class ChangesActions {
  static readonly CHANGE_LOAD_STARTED = 'CHANGE_LOAD_STARTED';
  static readonly CHANGE_LOAD_SUCCEDED = 'CHANGE_LOAD_SUCCEDED';
  static readonly CHANGE_LOAD_FAILED= 'CHANGE_LOAD_FAILED';

  @dispatch()
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
