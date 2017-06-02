import { Injectable } from '@angular/core';
import { SyncActions } from './sync.actions';
import { Http } from '@angular/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { MdSnackBar } from '@angular/material';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { FilterState } from '../fitness-schedule/store/filter/filter-state';
import { SettingsState } from '../fitness-schedule/store/settings/settings-state';
import { FavoriteState } from '../fitness-schedule/store/favorites/favorite-state';

@Injectable()
export class SyncEpics {

  @select() favorites$: Observable<FavoriteState>;
  @select() settings$: Observable<SettingsState>;
  @select() filter$: Observable<FilterState>;

  favorites: FavoriteState;
  settings: SettingsState;
  filter: FilterState;

  constructor(private http: Http,
              private actions: SyncActions,
              private snackBar: MdSnackBar) {
    this.favorites$.subscribe(favorites => this.favorites = favorites);
    this.settings$.subscribe(settings => this.settings = settings);
    this.filter$.subscribe(filter => this.filter = filter);
  }

  createEpics() {
    return action$ => action$
      .ofType(SyncActions.SYNC_REQUESTED)
      .switchMap(credentials => this.syncState()
        .map(response => this.actions.syncSuccess())
        .catch(error => of(this.actions.syncFailed()))
      );
  }

  private showErrorMessage(error) {
    if (error.status === 404) {
      this.showSnackBar('Login fehlgeschlagen. Versuche es später erneut.');
    }
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, null, {duration: 5000});
  }

  private syncState() {
    const url = '/api/sfs/sync';
    console.log('test');
    return this.http.post(url, {favorites: this.favorites, settings: this.settings, filter: this.filter});
  }

}
