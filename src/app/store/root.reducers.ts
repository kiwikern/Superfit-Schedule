import { combineReducers } from 'redux';
import { scheduleReducer } from '../fitness-schedule/store/schedule/schedule.reducers';
import { filterReducer } from '../fitness-schedule/store/filter/filter.reducers';
import { settingsReducer } from '../fitness-schedule/store/settings/settings.reducers';
import { favoriteReducer } from '../fitness-schedule/store/favorites/favorite.reducers';
import { pushNotificationReducer } from '../push-notification/push-notification.reducers';
import { authenticationReducer } from '../authentication/store/authentication.reducers';
import { routerReducer } from '@angular-redux/router';
import { syncReducer } from '../sync/sync.reducers';
import { changesReducer } from '../fitness-schedule/store/changes/changes.reducers';
/**
 * Created by Kim on 02.04.2017.
 */

export const rootReducer = combineReducers(<any>{
  schedule: scheduleReducer,
  changes: changesReducer,
  filter: filterReducer,
  settings: settingsReducer,
  favorites: favoriteReducer,
  pushNotifications: pushNotificationReducer,
  authentication: authenticationReducer,
  sync: syncReducer,
  router: routerReducer
});

