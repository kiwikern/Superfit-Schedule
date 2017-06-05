import { Injectable } from '@angular/core';
import { SyncActions } from './sync.actions';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { FilterState } from '../fitness-schedule/store/filter/filter-state';
import { SettingsState } from '../fitness-schedule/store/settings/settings-state';
import { FavoriteState } from '../fitness-schedule/store/favorites/favorite-state';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class SyncRequestedEpics {

  @select() favorites$: Observable<FavoriteState>;
  @select() settings$: Observable<SettingsState>;
  @select() filter$: Observable<FilterState>;
  @select(['sync', 'lastUpdate']) lastUpdate$: Observable<string>;

  favorites: FavoriteState;
  settings: SettingsState;
  filter: FilterState;
  lastUpdate: string;

  constructor(private http: AuthHttp,
              private actions: SyncActions) {
    this.favorites$.subscribe(favorites => this.favorites = favorites);
    this.settings$.subscribe(settings => this.settings = settings);
    this.filter$.subscribe(filter => this.filter = filter);
    this.lastUpdate$.subscribe(lastUpdate => this.lastUpdate = lastUpdate);
  }

  createEpics() {
    return action$ => action$
      .ofType(SyncActions.SYNC_REQUESTED)
      .switchMap(credentials => this.postSyncState()
        .map(response => this.actions.syncSuccess(response.json().lastUpdate))
        .catch(error => of(this.actions.syncFailed(), this.actions.activateSync()))
      );
  }

  private postSyncState() {
    const url = '/api/sfs/sync';
    const body = {
      lastUpdate: this.lastUpdate || 0,
      state: {favorites: this.favorites, settings: this.settings, filter: this.filter}
    };
    return this.http.post(url, body);
  }

}
