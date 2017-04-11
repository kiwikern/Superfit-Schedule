import { NgModule } from '@angular/core';
import { NgReduxModule, DevToolsExtension, NgRedux } from '@angular-redux/store';
import { IAppState } from './root.types';
import { RootEpics } from './root.epics';
import { RootActions } from './root.actions';
import { rootReducer } from './root.reducers';

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
      {},
      [...rootEpics.createEpics()],
    devTools.isEnabled() ? [devTools.enhancer()] : []);
  }
}
