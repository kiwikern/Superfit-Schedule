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

  let newState: SyncState;
  switch (action.type) {
    case SyncActions.SYNC_REQUESTED:
      newState = Object.assign({}, state);
      newState.isRequesting = false;
      break;
    case SyncActions.SYNC_SUCCESS:
      newState = Object.assign({}, state);
      newState.hasError = false;
      newState.isRequesting = false;
      break;
    case SyncActions.SYNC_FAILED:
      newState = Object.assign({}, state);
      newState.hasError = true;
      newState.isRequesting = false;
      break;
    case SyncActions.SYNC_ACTIVATE_REQUEST:
      newState = Object.assign({}, state);
      break;
    case SyncActions.SYNC_ACTIVATE_SUCCESS:
      newState = Object.assign({}, state);
      newState.isSyncActivated = true;
      newState.lastUpdate = action.payload.lastUpdate;
      break;
    case SyncActions.SYNC_ACTIVATE_FAILED:
      newState = Object.assign({}, state);
      newState.hasError = true;
      break;
    case SyncActions.SYNC_DEACTIVATED:
      newState = Object.assign({}, state);
      newState.hasError = false;
      newState.isRequesting = false;
      newState.isSyncActivated = false;
      break;
    default:
      newState = state;
  }

  return newState;
}
