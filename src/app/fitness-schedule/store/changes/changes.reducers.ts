import { IPayloadAction } from '../../../store/payload-action.types';
import { ChangesState } from './changes-state';
import { ChangesActions } from './changes.actions';
import { ScheduleChange } from './schedule-change.interface';
/**
 * Created by Kim on 02.04.2017.
 */

export const INITIAL_STATE: ChangesState = {
  changes: [],
  isLoading: false,
  error: null
};

export function changesReducer(state: ChangesState = INITIAL_STATE,
                               action: IPayloadAction<ScheduleChange[]>): ChangesState {
  switch (action.type) {
    case ChangesActions.CHANGE_LOAD_STARTED:
      return {
        changes: state.changes || [],
        isLoading: true,
        error: null
      };
    case ChangesActions.CHANGE_LOAD_SUCCEDED:
      return {
        changes: action.payload,
        isLoading: false,
        error: null
      };
    case ChangesActions.CHANGE_LOAD_FAILED:
      return {
        changes: state.changes || [],
        isLoading: false,
        error: action.error
      };
  }

  return state;
}
