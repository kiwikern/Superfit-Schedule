import { Injectable } from '@angular/core';

@Injectable()
export class SyncActions {
  static readonly SYNC_REQUESTED = 'SYNC_REQUESTED';
  static readonly SYNC_SUCCESS = 'SYNC_SUCCESS';
  static readonly SYNC_FAILED = 'SYNC_FAILED';
  static readonly SYNC_ACTIVATE_REQUEST = 'SYNC_ACTIVATE_REQUEST';
  static readonly SYNC_ACTIVATE_SUCCESS = 'SYNC_ACTIVATE_SUCCESS';
  static readonly SYNC_ACTIVATE_FAILED = 'SYNC_ACTIVATE_FAILED';
  static readonly SYNC_DEACTIVATED = 'SYNC_DEACTIVATED';

  sync() {
    return {
      type: SyncActions.SYNC_REQUESTED
    };
  }

  syncSuccess(lastUpdate) {
    return {
      type: SyncActions.SYNC_SUCCESS,
      payload: {lastUpdate}
    };
  }

  syncFailed() {
    return {
      type: SyncActions.SYNC_FAILED
    };
  }

  activateSync() {
    return {
      type: SyncActions.SYNC_ACTIVATE_REQUEST
    };
  }

  activateSyncSuccess(lastUpdate, userId) {
    return {
      type: SyncActions.SYNC_ACTIVATE_SUCCESS,
      payload: {lastUpdate, userId}
    };
  }

  deactivateSync() {
    return {
      type: SyncActions.SYNC_DEACTIVATED
    };
  }

  activateSyncFailed() {
    return {
      type: SyncActions.SYNC_ACTIVATE_FAILED
    };
  }
}
