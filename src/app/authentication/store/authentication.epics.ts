import { Injectable } from '@angular/core';
import { AuthenticationActions } from './authentication.actions';
import { Http } from '@angular/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
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
            this.showSnackBar('Login erfolgreich.');
            return of(this.routerActions.navigateTo('/schedule'),
              this.actions.loginSuccess(response.json().userName, response.json().token),
              this.syncActions.activateSync());
          })
          .catch(error => {
            this.showErrorMessage(error);
            return of(this.actions.loginFailed());
          })),
      action$ => action$
        .ofType(AuthenticationActions.LOGOUT)
        .flatMap(() => [this.routerActions.navigateTo('auth/login'), this.syncActions.deactivateSync()])
    ];
  }

  private showErrorMessage(error) {
    let errorInfo: string;
    if (error.status === 404) {
      errorInfo = 'Versuche es später erneut.';
    } else if (error.status === 0) {
      errorInfo = 'Keine Internetverbindung?';
    } else if (error.status === 401) {
      const cause = error.json();
      if (cause.unknownUsername) {
        errorInfo = 'Benutzername unbekannt.';
      } else if (cause.invalidPassword) {
        errorInfo = 'Passwort inkorrekt.';
      } else if (cause.unknownMail) {
        errorInfo = 'E-Mail unbekannt.';
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
