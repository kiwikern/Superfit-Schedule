import { IPayloadAction } from '../../store/payload-action.types';
import { RootActions } from '../../store/root.actions';
import { ScheduleState } from '../interfaces/schedule-state';
import { FitnessClass } from '../interfaces/fitness-class';
/**
 * Created by Kim on 02.04.2017.
 */

export const INITIAL_STATE: ScheduleState = {
  schedule: [],
  isLoading: false,
  error: null
};

export function scheduleReducer(state: ScheduleState = INITIAL_STATE,
                            action: IPayloadAction<FitnessClass[]>): ScheduleState {
  switch (action.type) {
    case RootActions.LOAD_STARTED:
      return {
        schedule: state.schedule || [],
        isLoading: true,
        error: null
      };
    case RootActions.LOAD_SUCCEDED:
      return {
        schedule: action.payload,
        isLoading: false,
        error: null
      };
    case RootActions.LOAD_FAILED:
      return {
        schedule: state.schedule || [],
        isLoading: false,
        error: action.error
      };
  }

  return state;
}
