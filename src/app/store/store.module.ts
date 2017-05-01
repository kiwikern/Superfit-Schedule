import { NgModule } from '@angular/core';
import { NgReduxModule, DevToolsExtension, NgRedux } from '@angular-redux/store';
import { IAppState } from './root.types';
import { RootEpics } from './root.epics';
import { rootReducer } from './root.reducers';

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
              devTools: DevToolsExtension) {

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
  }
}
