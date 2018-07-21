import { Injectable } from '@angular/core';
import { SyncActions } from './sync.actions';
import { of, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { select } from '@angular-redux/store';
import { FavoriteActions } from '../fitness-schedule/store/favorites/favorite.actions';
import { FilterActions } from '../fitness-schedule/store/filter/filter.actions';
import { SettingsActions } from '../fitness-schedule/store/settings/settings.actions';
import { AuthenticationActions } from '../authentication/store/authentication.actions';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, flatMap, switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

@Injectable()
export class SyncActivatedEpics {

  @select(['sync', 'lastUpdate']) lastUpdate$: Observable<number>;
  lastUpdate: number;

  constructor(private http: HttpClient,
              private syncActions: SyncActions,
              private favoriteActions: FavoriteActions,
              private filterActions: FilterActions,
              private settingsActions: SettingsActions,
              private authActions: AuthenticationActions,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.lastUpdate$.subscribe(lastUpdate => this.lastUpdate = lastUpdate);
    this.epics = action$ => action$
      .pipe(
        ofType(SyncActions.SYNC_ACTIVATE_REQUEST),
        switchMap(credentials => this.getSyncState()
          .pipe(
            flatMap((body: any) => {
              const lastUpdate: number = body.lastUpdate || 0;
              const userId: string = body.userid || null;
              const successAction = this.syncActions.activateSyncSuccess(lastUpdate, userId);
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
            }),
            catchError(error => this.handleErrors(error))
          )));
  }

  public epics;

  private getSyncState(): any {
    const url = '/api/sfs/sync';
    return this.http.get(url);
  }

  private handleErrors(error: Error | HttpErrorResponse): Observable<any> {
    if (error instanceof Error) {
      if (error.message.includes('JWT')) {
        return this.getLogoutActions();
      }
    } else if (error.status === 401) {
      return this.getLogoutActions();
    }
    return of(this.syncActions.activateSyncFailed());
  }

  private getLogoutActions(): Observable<any> {
    const snackbar = this.snackBar.open('Sitzung abgelaufen. Du wurdest ausgeloggt.',
      'Login', {duration: 5000});
    snackbar.onAction().subscribe(() => this.router.navigate(['/auth/login']));
    return of(this.syncActions.activateSyncFailed(), this.authActions.logout());
  }

}
