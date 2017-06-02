import { SyncState } from './sync-state.interface';
import { SyncActions } from './sync.actions';
import { IPayloadAction } from '../store/payload-action.types';
/**
 * Created by Kim on 21.05.2017.
 */

export const INITIAL_STATE: SyncState = {
  isSynced: false,
  isRequesting: false,
  isSyncActivated: false
};

export function syncReducer(state: SyncState = INITIAL_STATE,
                            action: IPayloadAction<any>): SyncState {

  switch (action.type) {
    case SyncActions.SYNC_REQUESTED:
      return {
        isSynced: false,
        isRequesting: true,
        isSyncActivated: state.isSyncActivated
      };
    case SyncActions.SYNC_SUCCESS:
      return {
        isSynced: true,
        isRequesting: false,
        isSyncActivated: state.isSyncActivated
      };
    case SyncActions.SYNC_FAILED:
      return {
        isSynced: false,
        isRequesting: false,
        isSyncActivated: state.isSyncActivated
      };
    case SyncActions.SYNC_ACTIVATED:
      return {
        isSynced: state.isSynced,
        isRequesting: state.isRequesting,
        isSyncActivated: true
      };
    case SyncActions.SYNC_DEACTIVATED:
      return {
        isSynced: state.isSynced,
        isRequesting: state.isRequesting,
        isSyncActivated: false
      };
  }

  return state;
}
