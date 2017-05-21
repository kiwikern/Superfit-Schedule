import { ScheduleState } from '../fitness-schedule/interfaces/schedule-state';
import { FilterState } from '../fitness-schedule/interfaces/filter-state';
import { FavoriteState } from '../fitness-schedule/interfaces/favorite-state';
import { PushNotificationState } from './push-notification-state.interface';
import { SettingsState } from '../fitness-schedule/interfaces/settings-state';
/**
 * Created by Kim on 02.04.2017.
 */
export interface IAppState {
  schedule?: ScheduleState;
  filter?: FilterState;
  favorites?: FavoriteState;
  pushNotifications?: PushNotificationState;
  settings?: SettingsState;
}
