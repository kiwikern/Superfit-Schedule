import { Injectable } from '@angular/core';
import { PushNotificationActions } from './push-notification.actions';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { select } from '@angular-redux/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

@Injectable()
export class PushNotificationEpics {

  @select(['authentication', 'userId']) userId$: Observable<string>;
  private userId: string;

  public epics;

  constructor(private serviceWorker: SwPush,
              private http: HttpClient,
              private actions: PushNotificationActions) {
    this.userId$.subscribe(userId => this.userId = userId);
    this.epics = action$ => action$
      .pipe(
        ofType(PushNotificationActions.PUSH_SUBSCRIPTION_REQUESTED),
        switchMap(action => this.register()),
        switchMap((sub: PushSubscription) => {
            console.log(sub);
            if (sub) {
              return this.sendSubscriptionToBackend(sub).pipe(
                map(() => this.actions.subscriptionAdded()),
                catchError(error => of(this.actions.subscriptionFailed()))
              );
            } else {
              return of(this.actions.subscriptionFailed());
            }
          }
        ),
        catchError(error => of(this.actions.subscriptionFailed()))
      );
  }


  private register(): Observable<PushSubscription> {
    const serverPublicKey = 'BI8fL00tA1vjDQjbqKwh4B61gkRdifSc7tV82sUxmugcSENDYJXZjnvYi07NEugNnL7UAj2EZ0Qo5_oXs_JC-xs';
    return from(this.serviceWorker.requestSubscription({serverPublicKey}));
  }

  private sendSubscriptionToBackend(subscription: PushSubscription) {
    const url = '/api/sfs/subscription';
    return this.http.post(url, {subscription: subscription.toJSON(), userId: this.userId});
  }

}
