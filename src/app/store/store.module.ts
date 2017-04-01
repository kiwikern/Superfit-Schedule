import { NgModule } from '@angular/core';
import { NgReduxModule, DevToolsExtension, NgRedux } from '@angular-redux/store';
import { IAppState } from './root.types';
import { rootReducer } from './root.reducers';

@NgModule({
  imports: [
    NgReduxModule
  ],
  declarations: []
})
export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>,
    devTools: DevToolsExtension
  ) {
    store.configureStore(rootReducer, {}, [],
    devTools.isEnabled() ? [devTools.enhancer()] : [])
  }
}
