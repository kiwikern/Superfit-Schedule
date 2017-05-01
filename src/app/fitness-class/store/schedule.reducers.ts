import { IPayloadAction } from '../../store/payload-action.types';
import { ScheduleState } from '../interfaces/schedule-state';
import { FitnessClass } from '../interfaces/fitness-class';
import { ScheduleActions } from './schedule.actions';
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
    case ScheduleActions.LOAD_STARTED:
      return {
        schedule: state.schedule || [],
        isLoading: true,
        error: null
      };
    case ScheduleActions.LOAD_SUCCEDED:
      return {
        schedule: action.payload,
        isLoading: false,
        error: null
      };
    case ScheduleActions.LOAD_FAILED:
      return {
        schedule: state.schedule || [],
        isLoading: false,
        error: action.error
      };
  }

  return state;
}
