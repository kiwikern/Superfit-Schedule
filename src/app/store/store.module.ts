import { NgModule } from '@angular/core';
import { NgReduxModule, DevToolsExtension, NgRedux } from '@angular-redux/store';
import { IAppState } from './root.types';
import { rootReducer, INITIAL_STATE } from './root.reducers';
import { RootEpics } from './root.epics';
import { RootActions } from './root.actions';
import { createEpicMiddleware } from 'redux-observable';

@NgModule({
  imports: [
    NgReduxModule
  ],
  declarations: [],
  providers: [RootActions, RootEpics]
})
export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>,
    rootEpics: RootEpics,
    devTools: DevToolsExtension
  ) {
    store.configureStore(rootReducer,
      INITIAL_STATE,
      [createEpicMiddleware(rootEpics.createEpics())],
    devTools.isEnabled() ? [devTools.enhancer()] : []);
  }
}
