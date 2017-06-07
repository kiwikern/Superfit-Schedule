import { SyncState } from './sync-state.interface';
import { SyncActions } from './sync.actions';
import { IPayloadAction } from '../store/payload-action.types';
/**
 * Created by Kim on 21.05.2017.
 */

export const INITIAL_STATE: SyncState = {
  hasError: false,
  isRequesting: false,
  isSyncActivated: false,
  lastUpdate: 0
};

export function syncReducer(state: SyncState = INITIAL_STATE,
                            action: IPayloadAction<any>): SyncState {

  switch (action.type) {
    case SyncActions.SYNC_REQUESTED:
      return {
        hasError: state.hasError,
        isRequesting: true,
        isSyncActivated: state.isSyncActivated,
        lastUpdate: state.lastUpdate
      };
    case SyncActions.SYNC_SUCCESS:
      return {
        hasError: false,
        isRequesting: false,
        isSyncActivated: state.isSyncActivated,
        lastUpdate: action.payload.lastUpdate
      };
    case SyncActions.SYNC_FAILED:
      return {
        hasError: true,
        isRequesting: false,
        isSyncActivated: state.isSyncActivated,
        lastUpdate: state.lastUpdate
      };
    case SyncActions.SYNC_ACTIVATE_REQUEST:
      return {
        hasError: state.hasError,
        isRequesting: true,
        isSyncActivated: state.isSyncActivated,
        lastUpdate: state.lastUpdate
      };
    case SyncActions.SYNC_ACTIVATE_SUCCESS:
      return {
        hasError: state.hasError,
        isRequesting: state.isRequesting,
        isSyncActivated: true,
        lastUpdate: action.payload.lastUpdate
      };
    case SyncActions.SYNC_ACTIVATE_FAILED:
      return {
        hasError: true,
        isRequesting: state.isRequesting,
        isSyncActivated: state.isSyncActivated,
        lastUpdate: state.lastUpdate
      };
    case SyncActions.SYNC_DEACTIVATED:
      return {
        hasError: false,
        isRequesting: false,
        isSyncActivated: false,
        lastUpdate: state.lastUpdate
      };
  }

  return state;
}
