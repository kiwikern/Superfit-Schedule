import { ScheduleState } from '../fitness-schedule/store/schedule/schedule-state';
import { FilterState } from '../fitness-schedule/store/filter/filter-state';
import { FavoriteState } from '../fitness-schedule/store/favorites/favorite-state';
import { PushNotificationState } from '../push-notification/push-notification-state.interface';
import { SettingsState } from '../fitness-schedule/store/settings/settings-state';
import { RouterState } from '@angular/router';
import { AuthenticationState } from '../authentication/store/authentication-state.interface';
import { SyncState } from '../sync/sync-state.interface';
import { OnboardingState } from '../onboarding/store/onboarding-state.interface';

/**
 * Created by Kim on 02.04.2017.
 */
export interface IAppState {
  schedule?: ScheduleState;
  filter?: FilterState;
  favorites?: FavoriteState;
  pushNotifications?: PushNotificationState;
  settings?: SettingsState;
  authentication?: AuthenticationState;
  router?: RouterState;
  sync?: SyncState;
  onboarding?: OnboardingState;
}
