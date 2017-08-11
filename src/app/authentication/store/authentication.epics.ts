import { Injectable } from '@angular/core';
import { AuthenticationActions } from './authentication.actions';
import { Http } from '@angular/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { MdSnackBar } from '@angular/material';
import { RouterActions } from '../../store/router.actions';
import { SyncActions } from '../../sync/sync.actions';

@Injectable()
export class AuthenticationEpics {

  constructor(private http: Http,
              private actions: AuthenticationActions,
              private snackBar: MdSnackBar,
              private routerActions: RouterActions,
              private syncActions: SyncActions) {
  }

  createEpics() {
    return [
      action$ => action$
        .ofType(AuthenticationActions.LOGIN_REQUESTED)
        .map(action => action.payload)
        .switchMap(credentials => this.requestLogin(credentials)
          .flatMap(response => {
            const redirectTo = credentials.redirectTo || '/schedule';
            return of(
              this.actions.loginSuccess(response.json().userName, response.json().token, response.json().userId),
              <any>this.routerActions.navigateTo(redirectTo));
          })
          .catch(error => {
            this.showErrorMessage(error);
            return of(this.actions.loginFailed());
          })),
      action$ => action$
        .ofType(AuthenticationActions.LOGOUT)
        .map(() => this.syncActions.deactivateSync()),
      action$ => action$
        .ofType(AuthenticationActions.LOGIN_SUCCESS)
        .map(() => {
          this.showSnackBar('Login erfolgreich.');
          return this.syncActions.activateSync();
        }),
      action$ => action$
        .ofType(AuthenticationActions.NEEDS_LOGIN)
        .map(action => {
          this.showSnackBar(action.payload.message);
          return this.routerActions.navigateTo(`/auth?route=${action.payload.route}`);
        })
    ];
  }

  private showErrorMessage(error) {
    let errorInfo: string;
    if (error.status === 500) {
      errorInfo = 'Versuche es später erneut.';
    } else if (error.status === 0) {
      errorInfo = 'Keine Internetverbindung?';
    } else if (error.status === 401) {
      if (error.json().key === 'wrong_password') {
        errorInfo = 'Passwort inkorrekt.';
      } else {
        errorInfo = 'Benutzer unbekannt.';
      }
    }
    const errorMessage = 'Login fehlgeschlagen.';
    this.showSnackBar(`${errorMessage}${errorInfo ? ' ' + errorInfo : ''}`);
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, null, {duration: 5000});
  }

  private requestLogin(credentials) {
    const url = '/api/sfs/user/session';
    return this.http.post(url, credentials);
  }

}
