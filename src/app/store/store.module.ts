import { NgModule } from '@angular/core';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './root.types';
import { RootEpics } from './root.epics';
import { rootReducer } from './root.reducers';
import { PushNotificationActions } from '../push-notification/push-notification.actions';
import { ScheduleActions } from '../fitness-schedule/store/schedule/schedule.actions';

@NgModule({
  imports: [
    NgReduxModule
  ],
  declarations: [],
  providers: [RootEpics]
})
export class StoreModule {
  constructor(public store: NgRedux<IAppState>,
              rootEpics: RootEpics,
              devTools: DevToolsExtension,
              pushNotificationActions: PushNotificationActions,
              scheduleActions: ScheduleActions) {

    const LOCAL_STORAGE_KEY = 'sfs.state';
    let persistedState;
    try {
      persistedState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
    } catch (e) {
      persistedState = {};
    }
    store.configureStore(rootReducer,
      persistedState,
      [...rootEpics.createEpics()],
      devTools.isEnabled() ? [devTools.enhancer()] : []);
    store.subscribe(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store.getState()));
    });
    store.dispatch(pushNotificationActions.addPushSubscription());
    store.dispatch(scheduleActions.loadSchedule());
  }
}
