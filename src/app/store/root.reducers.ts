import { combineReducers } from 'redux';
import { scheduleReducer } from '../fitness-class/store/schedule.reducers';
import { filterReducer } from '../fitness-class/store/filter.reducers';
import { settingsReducer } from '../fitness-class/store/settings.reducers';
import { favoriteReducer } from '../fitness-class/store/favorite.reducers';
/**
 * Created by Kim on 02.04.2017.
 */

export const rootReducer = combineReducers({
  schedule: scheduleReducer,
  filter: filterReducer,
  settings: settingsReducer,
  favorites: favoriteReducer
});

