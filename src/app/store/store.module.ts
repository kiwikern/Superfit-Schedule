import { NgModule } from '@angular/core';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './root-state.interface';
import { RootEpics } from './root.epics';
import { rootReducer } from './root.reducers';
import { PushNotificationActions } from '../push-notification/push-notification.actions';
import { ScheduleActions } from '../fitness-schedule/store/schedule/schedule.actions';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { RouterActions } from './router.actions';
import { ChangesActions } from '../fitness-schedule/store/changes/changes.actions';
import { ReleasenotesActions } from '../releasenotes/store/releasenotes.actions';
import { FeedbackActions } from '../feedback/store/feedback.actions';

@NgModule({
  imports: [
    NgReduxModule,
    NgReduxRouterModule
  ],
  declarations: [],
  providers: [
    RootEpics,
    RouterActions
  ]
})
export class StoreModule {
  constructor(public store: NgRedux<IAppState>,
              rootEpics: RootEpics,
              devTools: DevToolsExtension,
              pushNotificationActions: PushNotificationActions,
              scheduleActions: ScheduleActions,
              changesActions: ChangesActions,
              releasenotesActions: ReleasenotesActions,
              feedbackActions: FeedbackActions,
              ngReduxRouter: NgReduxRouter) {

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

    ngReduxRouter.initialize();

    store.dispatch(pushNotificationActions.addPushSubscription());
    store.dispatch(scheduleActions.loadSchedule());
    store.dispatch(changesActions.loadChanges());
    store.dispatch(releasenotesActions.checkVersion());
    feedbackActions.loadFeedback();
  }
}
