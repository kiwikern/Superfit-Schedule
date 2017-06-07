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
import { AuthenticationActions } from '../authentication/store/authentication.actions';
import { ActionsObservable } from 'redux-observable';

@Injectable()
export class SyncActivatedEpics {

  @select(['sync', 'lastUpdate']) lastUpdate$: Observable<number>;
  lastUpdate: number;

  constructor(private http: AuthHttp,
              private syncActions: SyncActions,
              private favoriteActions: FavoriteActions,
              private filterActions: FilterActions,
              private settingsActions: SettingsActions,
              private authActions: AuthenticationActions,
              private snackBar: MdSnackBar) {
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
            return [successAction];
          } else {
            return [successAction, ...setActions];
          }
        })
        .catch(error => this.handleErrors(error))
      );
  }

  private getSyncState() {
    const url = '/api/sfs/sync';
    return this.http.get(url);
  }

  private handleErrors(error: Error | Response): Observable<any> {
    if (error instanceof Error) {
      if (error.name.includes('JWT')) {
        return this.getLogoutActions();
      }
    } else if (error.status === 401) {
      return this.getLogoutActions();
    }
    return of(this.syncActions.activateSyncFailed());
  }

  private getLogoutActions(): Observable<any> {
    this.snackBar.open('Sitzung abgelaufen. Du wurdest ausgeloggt.');
    return of(this.syncActions.activateSyncFailed(), this.authActions.logout());
  }

}
