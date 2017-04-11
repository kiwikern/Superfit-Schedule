import { IScheduleState, IFitnessClass } from '../fitness-class.types';
import { IPayloadAction } from '../../store/payload-action.types';
import { RootActions } from '../../store/root.actions';
/**
 * Created by Kim on 02.04.2017.
 */

export const INITIAL_STATE: IScheduleState = {
  schedule: [],
  isLoading: false,
  error: null
};

export function scheduleReducer(state: IScheduleState = INITIAL_STATE,
                            action: IPayloadAction<IFitnessClass[]>): IScheduleState {
  switch (action.type) {
    case RootActions.LOAD_STARTED:
      return {
        schedule: [],
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
        schedule: [],
        isLoading: false,
        error: action.error
      };
  }

  return state;
}
