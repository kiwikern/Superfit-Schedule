import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncActions } from './sync.actions';
import { SyncEpics } from './sync.epics';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/debounceTime';
import { FavoriteState } from '../fitness-schedule/store/favorites/favorite-state';
import { SettingsState } from '../fitness-schedule/store/settings/settings-state';
import { FilterState } from '../fitness-schedule/store/filter/filter-state';
import { Subscription } from 'rxjs/Subscription';
import { IAppState } from '../store/root-state.interface';
import { isEqual } from 'lodash-es';
import { StatusComponent } from './status/status.component';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SfsMaterialModule,
    RouterModule
  ],
  declarations: [
    StatusComponent
  ],
  providers: [
    SyncActions,
    SyncEpics
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
      this.stateSubscription = Observable.combineLatest(this.favorites$, this.settings$, this.filter$)
        .debounceTime(5000)
        .distinctUntilChanged(isEqual)
        .subscribe(() => this.ngRedux.dispatch(this.syncActions.sync()));
    } else if (!isActivated && !hasOpenSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }

}
