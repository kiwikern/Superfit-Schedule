import { Injectable } from '@angular/core';
import { AuthenticationActions } from './authentication.actions';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { RouterActions } from '../../store/router.actions';
import { SyncActions } from '../../sync/sync.actions';
import { Router } from '@angular/router';
import { catchError, flatMap, map, switchMap } from 'rxjs/operators';
import { IPayloadAction } from '../../store/payload-action.types';

@Injectable()
export class AuthenticationEpics {

  constructor(private http: HttpClient,
              private actions: AuthenticationActions,
              private snackBar: MatSnackBar,
              private routerActions: RouterActions,
              private router: Router,
              private syncActions: SyncActions) {
  }

  createEpics() {
    return [
      action$ => action$
        .ofType(AuthenticationActions.LOGIN_REQUESTED)
        .pipe(
          map((action: IPayloadAction<any>) => action.payload),
          switchMap((credentials: any) => this.requestLogin(credentials)
            .pipe(
              flatMap((response: any) => {
                const redirectTo = credentials.redirectTo || '/schedule';
                return of(
                  this.actions.loginSuccess(response.userName, response.token, response.userId),
                  <any>this.routerActions.navigateTo(redirectTo));
              }),
              catchError(error => {
                this.showErrorMessage(error);
                return of(this.actions.loginFailed());
              })))),
      action$ => action$
        .ofType(AuthenticationActions.LOGOUT)
        .pipe(
          map(() => this.syncActions.deactivateSync())
        ),
      action$ => action$
        .ofType(AuthenticationActions.LOGIN_SUCCESS)
        .pipe(
          map(() => {
            this.showSnackBar('Login erfolgreich.');
            return this.syncActions.activateSync();
          })
        ),
      action$ => action$
        .ofType(AuthenticationActions.NEEDS_LOGIN)
        .pipe(
          map((action: IPayloadAction<any>) => {
            const redirectRoute = action.payload.route;
            const backRoute = redirectRoute.substr(0, redirectRoute.lastIndexOf('/'));
            this.showSnackBar(action.payload.message, 'Zurück')
              .onAction()
              .subscribe(() => this.router.navigate([backRoute]));
            return this.routerActions.navigateTo(`/auth?route=${redirectRoute}`);
          }))
    ];
  }

  private showErrorMessage(error: HttpErrorResponse) {
    let errorInfo: string;
    if (error.status === 500) {
      errorInfo = 'Versuche es später erneut.';
    } else if (error.status === 0) {
      errorInfo = 'Keine Internetverbindung?';
    } else if (error.status === 401) {
      if (error.error.key === 'wrong_password') {
        errorInfo = 'Falsches Passwort.';
      } else {
        errorInfo = 'Unbekannter Benutzer.';
      }
    }
    const errorMessage = 'Login fehlgeschlagen.';
    this.showSnackBar(`${errorMessage}${errorInfo ? ' ' + errorInfo : ''}`);
  }

  private showSnackBar(message: string, action = 'OK'): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {duration: 5000});
  }

  private requestLogin(credentials): any {
    const url = '/api/sfs/user/session';
    return this.http.post(url, credentials);
  }

}
