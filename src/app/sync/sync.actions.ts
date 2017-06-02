import { Injectable } from '@angular/core';

@Injectable()
export class SyncActions {
  static readonly SYNC_REQUESTED = 'SYNC_REQUESTED';
  static readonly SYNC_SUCCESS = 'SYNC_SUCCESS';
  static readonly SYNC_FAILED = 'SYNC_FAILED';
  static readonly SYNC_ACTIVATED = 'SYNC_ACTIVATED';
  static readonly SYNC_DEACTIVATED = 'SYNC_DEACTIVATED';

  sync() {
    return {
      type: SyncActions.SYNC_REQUESTED
    };
  }

  syncSuccess() {
    return {
      type: SyncActions.SYNC_SUCCESS
    };
  }

  syncFailed() {
    return {
      type: SyncActions.SYNC_FAILED
    };
  }

  activateSync() {
    return {
      type: SyncActions.SYNC_ACTIVATED
    };
  }

  deactivateSync() {
    return {
      type: SyncActions.SYNC_DEACTIVATED
    };
  }
}
