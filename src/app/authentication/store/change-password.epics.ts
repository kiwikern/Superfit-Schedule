import { Injectable } from '@angular/core';
import { AuthenticationActions } from './authentication.actions';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ChangePasswordEpics {

  constructor(private http: HttpClient,
              private actions: AuthenticationActions,
              private snackBar: MatSnackBar) {
  }

  createEpics() {
    return action$ => action$
      .ofType(AuthenticationActions.CHANGE_PASSWORD_REQUESTED)
      .map(action => action.payload)
      .switchMap(payload => this.changePassword(payload.password, payload.token)
        .flatMap(response => {
          this.showSnackBar('Dein Passwort wurde geändert.');
          if (response.token && response.userName) {
            return of(this.actions.changePasswordSuccess(),
              this.actions.loginSuccess(response.userName, response.token, response.userId))
              .delay(2000);
          } else {
            return of(this.actions.changePasswordSuccess());
          }
        })
        .catch(error => {
          this.showErrorMessage(error);
          return of(this.actions.changePasswordFailed(error));
        }));
  }

  private showErrorMessage(error: HttpErrorResponse) {
    let errorInfo: string;
    if (error.status === 404) {
      errorInfo = 'User nicht gefunden.';
    } else if (error.status === 0) {
      errorInfo = 'Keine Internetverbindung?';
    } else if (error.status === 400) {
      if (error.error.key === 'captcha_failed') {
        errorInfo = 'Captcha ungültig.';
      }
    }
    const errorMessage = 'Passwortänderung fehlgeschlagen.';
    this.showSnackBar(`${errorMessage}${errorInfo ? ' ' + errorInfo : ''}`);
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {duration: 8000});
  }

  private changePassword(password, token): any {
    const url = '/api/sfs/user/reset-password';
    if (!token) {
      return this.http.post(url, {password});
    } else {
      return this.http.post<any>(url, {password}, {
        headers: new HttpHeaders().set('Authorization', `bearer ${token}`),
      });
    }
  }
}
