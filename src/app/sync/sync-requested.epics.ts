import { Injectable } from '@angular/core';
import { SyncActions } from './sync.actions';
import { of } from 'rxjs/observable/of';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { FilterState } from '../fitness-schedule/store/filter/filter-state';
import { SettingsState } from '../fitness-schedule/store/settings/settings-state';
import { FavoriteState } from '../fitness-schedule/store/favorites/favorite-state';
import { AuthenticationActions } from '../authentication/store/authentication.actions';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class SyncRequestedEpics {

  @select() favorites$: Observable<FavoriteState>;
  @select() settings$: Observable<SettingsState>;
  @select() filter$: Observable<FilterState>;
  @select(['sync', 'lastUpdate']) lastUpdate$: Observable<string>;
  @select(['sync', 'userId']) userId$: Observable<string>;

  favorites: FavoriteState;
  settings: SettingsState;
  filter: FilterState;
  lastUpdate: string;
  userId: string;

  constructor(private http: HttpClient,
              private actions: SyncActions,
              private authActions: AuthenticationActions,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.favorites$.subscribe(favorites => this.favorites = favorites);
    this.settings$.subscribe(settings => this.settings = settings);
    this.filter$.subscribe(filter => this.filter = filter);
    this.lastUpdate$.subscribe(lastUpdate => this.lastUpdate = lastUpdate);
    this.userId$.subscribe(userId => this.userId = userId);
  }

  createEpics() {
    return action$ => action$
      .ofType(SyncActions.SYNC_REQUESTED)
      .pipe(
        switchMap(credentials => this.postSyncState()
          .pipe(
            map(response => this.actions.syncSuccess(response.lastUpdate)),
            catchError(error => this.handleError(error))
          )));
  }

  private postSyncState(): Observable<any> {
    const url = '/api/sfs/sync';
    const body = {
      lastUpdate: this.lastUpdate || 0,
      userId: this.userId || null,
      state: {favorites: this.favorites, settings: this.settings, filter: this.filter}
    };
    return this.http.post(url, body);
  }

  private handleError(error: HttpErrorResponse | Error): Observable<any> {
    if (error instanceof Error) {
      if (error.name.includes('JWT')) {
        return this.getAuthFailedActions();
      }
    } else if (error.status === 401) {
      return this.getAuthFailedActions();
    } else {
      return of(this.actions.syncFailed(), this.actions.activateSync());
    }
  }

  private getAuthFailedActions(): Observable<any> {
    const snackbar = this.snackBar.open(
      'Sitzung abgelaufen. Du wurdest ausgeloggt.', 'Login', {duration: 5000});
    snackbar.onAction().subscribe(() => this.router.navigate(['/auth/login']));
    return of(this.actions.syncFailed(), this.authActions.logout());
  }

}
