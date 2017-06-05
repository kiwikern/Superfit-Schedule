import { Injectable } from '@angular/core';
import { SyncActions } from './sync.actions';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { MdSnackBar } from '@angular/material';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { FilterState } from '../fitness-schedule/store/filter/filter-state';
import { SettingsState } from '../fitness-schedule/store/settings/settings-state';
import { FavoriteState } from '../fitness-schedule/store/favorites/favorite-state';
import { AuthHttp } from 'angular2-jwt';
import { FavoriteActions } from '../fitness-schedule/store/favorites/favorite.actions';
import { FilterActions } from '../fitness-schedule/store/filter/filter.actions';
import { SettingsActions } from '../fitness-schedule/store/settings/settings.actions';

@Injectable()
export class SyncActivatedEpics {

  @select(['sync', 'lastUpdate']) lastUpdate$: Observable<number>;
  lastUpdate: number;

  constructor(private http: AuthHttp,
              private syncActions: SyncActions,
              private favoriteActions: FavoriteActions,
              private filterActions: FilterActions,
              private settingsActions: SettingsActions) {
    this.lastUpdate$.subscribe(lastUpdate => this.lastUpdate = lastUpdate);
  }

  createEpics() {
    return action$ => action$
      .ofType(SyncActions.SYNC_ACTIVATE_REQUEST)
      .switchMap(credentials => this.getSyncState()
        .flatMap(response => {
          const body = response.json();
          const lastUpdate: number = body.lastUpdate || 0;
          const successAction = this.syncActions.activateSyncSuccess(lastUpdate);
          let setActions = [];
          if (body.state) {
            setActions = [
              this.filterActions.setFilter(body.state.filter),
              this.favoriteActions.setFavorites(body.state.favorites),
              this.settingsActions.setSettings(body.state.settings)
            ];
          }
          if (lastUpdate === this.lastUpdate) {
            return  [successAction];
          } else {
            return [successAction, ...setActions];
          }
        })
        .catch(error => of(this.syncActions.activateSyncFailed()))
      );
  }

  private getSyncState() {
    const url = '/api/sfs/sync';
    return this.http.get(url);
  }

}
