import { IAppState } from './root.types';
import { RootActions } from './root.actions';
import { IPayloadAction } from './payload-action.types';
import { IFitnessClass } from '../fitness-class/fitness-class.types';
import { combineReducers } from 'redux';
import { scheduleReducer } from '../fitness-class/store/schedule.reducers';
import { filterReducer } from '../fitness-class/store/filter.reducers';
/**
 * Created by Kim on 02.04.2017.
 */

export const rootReducer = combineReducers({
  schedule: scheduleReducer,
  filter: filterReducer
});

