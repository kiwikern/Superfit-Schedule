import { combineReducers } from 'redux';
import { scheduleReducer } from '../fitness-schedule/store/schedule/schedule.reducers';
import { filterReducer } from '../fitness-schedule/store/filter/filter.reducers';
import { settingsReducer } from '../fitness-schedule/store/settings/settings.reducers';
import { favoriteReducer } from '../fitness-schedule/store/favorites/favorite.reducers';
import { pushNotificationReducer } from '../push-notification/push-notification.reducers';
import { authenticationReducer } from '../authentication/store/authentication.reducers';
/**
 * Created by Kim on 02.04.2017.
 */

export const rootReducer = combineReducers({
  schedule: scheduleReducer,
  filter: filterReducer,
  settings: settingsReducer,
  favorites: favoriteReducer,
  pushNotifications: pushNotificationReducer,
  authentication: authenticationReducer
});

