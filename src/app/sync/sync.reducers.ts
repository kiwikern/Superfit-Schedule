import { SyncState } from './sync-state.interface';
import { SyncActions } from './sync.actions';
import { IPayloadAction } from '../store/payload-action.types';
/**
 * Created by Kim on 21.05.2017.
 */

export const INITIAL_STATE: SyncState = {
  hasError: false,
  isRequesting: false,
  isSyncActivated: false
};

export function syncReducer(state: SyncState = INITIAL_STATE,
                            action: IPayloadAction<any>): SyncState {

  switch (action.type) {
    case SyncActions.SYNC_REQUESTED:
      return {
        hasError: state.hasError,
        isRequesting: true,
        isSyncActivated: state.isSyncActivated
      };
    case SyncActions.SYNC_SUCCESS:
      return {
        hasError: false,
        isRequesting: false,
        isSyncActivated: state.isSyncActivated
      };
    case SyncActions.SYNC_FAILED:
      return {
        hasError: true,
        isRequesting: false,
        isSyncActivated: state.isSyncActivated
      };
    case SyncActions.SYNC_ACTIVATED:
      return {
        hasError: state.hasError,
        isRequesting: state.isRequesting,
        isSyncActivated: true
      };
    case SyncActions.SYNC_DEACTIVATED:
      return {
        hasError: state.hasError,
        isRequesting: state.isRequesting,
        isSyncActivated: false
      };
  }

  return state;
}
