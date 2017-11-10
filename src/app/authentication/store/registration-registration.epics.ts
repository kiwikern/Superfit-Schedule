import { Injectable } from '@angular/core';
import { AuthenticationActions } from './authentication.actions';
import { of } from 'rxjs/observable/of';
import { MatSnackBar } from '@angular/material';
import { RouterActions } from '../../store/router.actions';
import { SyncActions } from '../../sync/sync.actions';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPayloadAction } from '../../store/payload-action.types';
import { catchError, flatMap, map, switchMap } from 'rxjs/operators';

@Injectable()
export class RegistrationEpics {

  constructor(private http: HttpClient,
              private actions: AuthenticationActions,
              private snackBar: MatSnackBar,
              private routerActions: RouterActions,
              private syncActions: SyncActions) {
  }

  createEpics() {
    return action$ => action$
      .ofType(AuthenticationActions.REGISTRATION_REQUESTED)
      .pipe(
        map((action: IPayloadAction<any>) => action.payload),
        switchMap((credentials: any) => this.requestLogin(credentials)
          .pipe(
            flatMap((body: any) => {
              this.showSnackBar('Registrierung erfolgreich.');
              const redirectTo = credentials.redirectTo || '/schedule';
              return of(this.routerActions.navigateTo(redirectTo),
                this.actions.registerSuccess(body.userName, body.token, body.userId),
                this.syncActions.activateSync());
            }),
            catchError(error => {
              this.showErrorMessage(error);
              return of(this.actions.registerFailed());
            }))));
  }

  private showErrorMessage(error: HttpErrorResponse) {
    let errorInfo: string;
    if (error.status === 404) {
      errorInfo = 'Versuche es später erneut.';
    } else if (error.status === 0) {
      errorInfo = 'Keine Internetverbindung?';
    } else if (error.status === 400) {
      const errorKey = error.error.key;
      if (errorKey === 'username_exists') {
        errorInfo = 'Benutzername bereits vergeben.';
      } else if (errorKey === 'mailaddress_exists') {
        errorInfo = 'E-Mail bereits registriert.';
      }
    }
    const errorMessage = 'Registrierung fehlgeschlagen.';
    this.showSnackBar(`${errorMessage}${errorInfo ? ' ' + errorInfo : ''}`);
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {duration: 8000});
  }

  private requestLogin(credentials): any {
    const url = '/api/sfs/user';
    return this.http.post(url, credentials);
  }

}
