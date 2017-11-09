import { Injectable } from '@angular/core';
import { AuthenticationActions } from './authentication.actions';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ResetPasswordEpics {

  constructor(private http: HttpClient,
              private actions: AuthenticationActions,
              private snackBar: MatSnackBar) {
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
    const errorMessage = 'Zurücksetzen fehlgeschlagen.';
    this.showSnackBar(`${errorMessage}${errorInfo ? ' ' + errorInfo : ''}`);
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {duration: 8000});
  }

  private requestPasswordReset(body) {
    const url = '/api/sfs/user/request-reset-password';
    return this.http.post(url, body);
  }

}
