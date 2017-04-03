import { IAppState } from './root.types';
import { RootActions } from './root.actions';
import { IPayloadAction } from './payload-action.types';
import { IFitnessClass } from '../fitness-class/fitness-class.types';
/**
 * Created by Kim on 02.04.2017.
 */

export const INITIAL_STATE: IAppState = {
  schedule: [],
  isLoading: false,
  error: null
};

export function rootReducer(state: IAppState = INITIAL_STATE,
                            action: IPayloadAction<IFitnessClass[]>): IAppState {
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
