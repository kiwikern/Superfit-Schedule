import { Injectable } from '@angular/core';
import { AuthenticationActions } from './authentication.actions';
import { Http } from '@angular/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { MdSnackBar } from '@angular/material';
import { RouterActions } from '../../store/router.actions';
import { SyncActions } from '../../sync/sync.actions';

@Injectable()
export class RegistrationEpics {

  constructor(private http: Http,
              private actions: AuthenticationActions,
              private snackBar: MdSnackBar,
              private routerActions: RouterActions,
              private syncActions: SyncActions) {
  }

  createEpics() {
    return action$ => action$
      .ofType(AuthenticationActions.REGISTRATION_REQUESTED)
      .map(action => action.payload)
      .switchMap(credentials => this.requestLogin(credentials)
        .flatMap(response => {
          this.showSnackBar('Registrierung erfolgreich.');
          const body = response.json();
          const redirectTo = credentials.redirectTo || '/schedule';
          return of(this.routerActions.navigateTo(redirectTo),
            this.actions.registerSuccess(body.userName, body.token, body.userId),
            this.syncActions.activateSync());
        })
        .catch(error => {
          this.showErrorMessage(error);
          return of(this.actions.registerFailed());
        }));
  }

  private showErrorMessage(error) {
    let errorInfo: string;
    if (error.status === 404) {
      errorInfo = 'Versuche es später erneut.';
    } else if (error.status === 0) {
      errorInfo = 'Keine Internetverbindung?';
    } else if (error.status === 400) {
      const cause = error.json();
      if (cause.key === 'username_exists') {
        errorInfo = 'Benutzername bereits vergeben.';
      } else if (cause.key === 'mailaddress_exists') {
        errorInfo = 'E-Mail bereits registriert.';
      }
    }
    const errorMessage = 'Registrierung fehlgeschlagen.';
    this.showSnackBar(`${errorMessage}${errorInfo ? ' ' + errorInfo : ''}`);
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, null, {duration: 8000});
  }

  private requestLogin(credentials) {
    const url = '/api/sfs/user';
    return this.http.post(url, credentials);
  }

}
