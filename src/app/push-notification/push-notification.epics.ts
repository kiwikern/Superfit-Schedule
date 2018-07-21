import { Injectable } from '@angular/core';
import { PushNotificationActions } from './push-notification.actions';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { catchError, flatMap, map, switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

@Injectable()
export class PushNotificationEpics {

  @select(['authentication', 'userId']) userId$: Observable<string>;
  private userId: string;

  constructor(private serviceWorker: SwPush,
              private http: HttpClient,
              private actions: PushNotificationActions) {
    this.userId$.subscribe(userId => this.userId = userId);
  }

  epics = action$ => action$
    .pipe(
      ofType(PushNotificationActions.PUSH_SUBSCRIPTION_REQUESTED),
      flatMap(action => this.register()),
      switchMap(sub => this.sendSubscriptionToBackend(sub)
        .pipe(
          map(() => this.actions.subscriptionAdded()),
          catchError(error => of(this.actions.subscriptionFailed()))
        )
      )
    );

  private register() {
    const serverPublicKey = 'BI8fL00tA1vjDQjbqKwh4B61gkRdifSc7tV82sUxmugcSENDYJXZjnvYi07NEugNnL7UAj2EZ0Qo5_oXs_JC-xs';
    return this.serviceWorker.requestSubscription({serverPublicKey});
  }

  private sendSubscriptionToBackend(subscription) {
    const url = '/api/sfs/subscription';
    return this.http.post(url, {subscription, userId: this.userId});
  }

}
