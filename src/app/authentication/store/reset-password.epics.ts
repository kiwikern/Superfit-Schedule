import { Injectable } from '@angular/core';
import { AuthenticationActions } from './authentication.actions';
import { Http } from '@angular/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class ResetPasswordEpics {

  constructor(private http: Http,
              private actions: AuthenticationActions,
              private snackBar: MdSnackBar) {
  }

  createEpics() {
    return action$ => action$
      .ofType(AuthenticationActions.RESET_PASSWORD_REQUESTED)
      .map(action => action.payload)
      .switchMap(body => this.requestPasswordReset(body)
        .map(response => {
          this.showSnackBar('Eine E-Mail wurde an dich versandt.');
          return this.actions.resetPasswordSuccess();
        })
        .catch(error => {
          this.showErrorMessage(error);
          return of(this.actions.resetPasswordFailed(error));
        }));
  }

  private showErrorMessage(error) {
    let errorInfo: string;
    if (error.status === 404) {
      errorInfo = 'User nicht gefunden.';
    } else if (error.status === 0) {
      errorInfo = 'Keine Internetverbindung?';
    } else if (error.status === 400) {
      const cause = error.json();
      if (cause.key === 'captcha_failed') {
        errorInfo = 'Captcha ungültig.';
      }
    }
    const errorMessage = 'Zurücksetzen fehlgeschlagen.';
    this.showSnackBar(`${errorMessage}${errorInfo ? ' ' + errorInfo : ''}`);
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, null, {duration: 8000});
  }

  private requestPasswordReset(body) {
    const url = '/api/sfs/user/request-reset-password';
    return this.http.post(url, body);
  }

}
