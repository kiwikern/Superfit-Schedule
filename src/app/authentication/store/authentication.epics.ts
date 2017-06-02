import { Injectable } from '@angular/core';
import { AuthenticationActions } from './authentication.actions';
import { Http } from '@angular/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { MdSnackBar } from '@angular/material';
import { RouterActions } from '../../store/router.actions';

@Injectable()
export class AuthenticationEpics {

  constructor(private http: Http,
              private actions: AuthenticationActions,
              private snackBar: MdSnackBar,
              private routerActions: RouterActions) {
  }

  createEpics() {
    return action$ => action$
      .ofType(AuthenticationActions.LOGIN_REQUESTED)
      .switchMap(credentials => this.requestLogin(credentials)
        .flatMap(response => {
          this.showSnackBar('Login erfolgreich.');
          return of(this.routerActions.navigateTo('/schedule'), this.actions.loginSuccess(response.json().token));
        })
        .catch(error => {
          this.showErrorMessage(error);
          return of(this.actions.loginFailed());
        }));
  }

  private showErrorMessage(error) {
    console.log(error);
    if (error.status === 404) {
      this.showSnackBar('Login fehlgeschlagen. Versuche es später erneut.');
    } else if (error.status === 0) {
      this.showSnackBar('Login fehlgeschlagen. Keine Internetverbindung?');
    } else if (error.status === 401) {
      const cause = error.json();
      if (cause.unknownUsername) {
        this.showSnackBar('Login fehlgeschlagen. Benutzername unbekannt.');
      } else if (cause.invalidPassword) {
        this.showSnackBar('Login fehlgeschlagen. Passwort inkorrekt.');
      } else {
        this.showSnackBar('Login fehlgeschlagen.');
      }
    } else {
      this.showSnackBar('Login fehlgeschlagen.');
    }
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, null, {duration: 5000});
  }

  private requestLogin(credentials) {
    const url = '/api/sfs/auth/login';
    return this.http.post(url, credentials);
  }

}
