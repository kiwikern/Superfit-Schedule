import { combineReducers } from 'redux';
import { scheduleReducer } from '../fitness-schedule/store/schedule.reducers';
import { filterReducer } from '../fitness-schedule/store/filter.reducers';
import { settingsReducer } from '../fitness-schedule/store/settings.reducers';
import { favoriteReducer } from '../fitness-schedule/store/favorite.reducers';
import { pushNotificationReducer } from '../push-notification/push-notification.reducers';
/**
 * Created by Kim on 02.04.2017.
 */

export const rootReducer = combineReducers({
  schedule: scheduleReducer,
  filter: filterReducer,
  settings: settingsReducer,
  favorites: favoriteReducer,
  pushNotifications: pushNotificationReducer
});

