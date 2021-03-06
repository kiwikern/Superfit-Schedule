
import {combineLatest as observableCombineLatest,  Observable ,  Subscription } from 'rxjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncActions } from './sync.actions';
import { SyncRequestedEpics } from './sync-requested.epics';
import { NgRedux, select } from '@angular-redux/store';
import { FavoriteState } from '../fitness-schedule/store/favorites/favorite-state';
import { SettingsState } from '../fitness-schedule/store/settings/settings-state';
import { FilterState } from '../fitness-schedule/store/filter/filter-state';
import { IAppState } from '../store/root-state.interface';
import * as isEqual from 'lodash.isequal';
import { StatusComponent } from './status/status.component';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { RouterModule } from '@angular/router';
import { SyncActivatedEpics } from './sync-activated.epics';
import { Angulartics2Module } from 'angulartics2';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@NgModule({
  imports: [
    CommonModule,
    SfsMaterialModule,
    RouterModule,
    Angulartics2Module
  ],
  declarations: [
    StatusComponent
  ],
  providers: [
    SyncActions,
    SyncRequestedEpics,
    SyncActivatedEpics
  ],
  exports: [
    StatusComponent
  ]
})
export class SyncModule {

  @select() favorites$: Observable<FavoriteState>;
  @select() settings$: Observable<SettingsState>;
  @select() filter$: Observable<FilterState>;
  @select(['sync', 'isSyncActivated']) isSyncActivated$: Observable<boolean>;

  stateSubscription: Subscription;

  constructor(private ngRedux: NgRedux<IAppState>,
              private syncActions: SyncActions) {
    this.isSyncActivated$.subscribe(isActivated => this.watchChanges(isActivated));
  }

  watchChanges(isActivated: boolean) {
    const hasOpenSubscription = (!this.stateSubscription || this.stateSubscription.closed);
    if (isActivated && hasOpenSubscription) {
      this.stateSubscription = observableCombineLatest(this.favorites$, this.settings$, this.filter$)
        .pipe(
          debounceTime(5000),
          distinctUntilChanged(isEqual)
        ).subscribe(() => this.ngRedux.dispatch(this.syncActions.sync()));
    } else if (!isActivated && !hasOpenSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }

}
