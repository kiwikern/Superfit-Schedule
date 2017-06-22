import { IPayloadAction } from '../../../store/payload-action.types';
import { ScheduleState } from './schedule-state';
import { ScheduleActions } from './schedule.actions';
import { FitnessClassesPerDay } from '../../interfaces/fitness-classes-per-day';
/**
 * Created by Kim on 02.04.2017.
 */

export const INITIAL_STATE: ScheduleState = {
  schedulePerDay: [],
  isLoading: false,
  error: null
};

export function scheduleReducer(state: ScheduleState = INITIAL_STATE,
                            action: IPayloadAction<FitnessClassesPerDay[]>): ScheduleState {
  switch (action.type) {
    case ScheduleActions.SCHEDULE_LOAD_STARTED:
      return {
        schedulePerDay: state.schedulePerDay || [],
        isLoading: true,
        error: null
      };
    case ScheduleActions.SCHEDULE_LOAD_SUCCEDED:
      return {
        schedulePerDay: action.payload,
        isLoading: false,
        error: null
      };
    case ScheduleActions.SCHEDULE_LOAD_FAILED:
      return {
        schedulePerDay: state.schedulePerDay || [],
        isLoading: false,
        error: action.error
      };
  }

  return state;
}
