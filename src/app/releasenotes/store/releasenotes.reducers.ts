import { ReleasenotesState } from './releasenotes-state.interface';
import { ReleasenotesActions } from './releasenotes.actions';
import { IPayloadAction } from '../../store/payload-action.types';

export const INITIAL_STATE: ReleasenotesState = {
  version: 'new',
  seenVersion: 'new'
};

export function releasenotesReducer(state: ReleasenotesState = INITIAL_STATE,
                                    action: IPayloadAction<any>): ReleasenotesState {

  switch (action.type) {
    case ReleasenotesActions.SHOW_RELEASENOTES_SUCCESS:
      return {
        version: state.version,
        seenVersion: action.payload
      };
    case ReleasenotesActions.CHECK_VERSION_SUCCESS:
      return {
        version: action.payload,
        seenVersion: state.seenVersion
      };
  }

  return state;
}
