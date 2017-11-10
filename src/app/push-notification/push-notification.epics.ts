import { Injectable } from '@angular/core';
import { PushNotificationActions } from './push-notification.actions';
import { NgServiceWorker } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { catchError, flatMap, map, switchMap } from 'rxjs/operators';

@Injectable()
export class PushNotificationEpics {

  @select(['authentication', 'userId']) userId$: Observable<string>;
  private userId: string;

  constructor(private serviceWorker: NgServiceWorker,
              private http: HttpClient,
              private actions: PushNotificationActions) {
    this.userId$.subscribe(userId => this.userId = userId);
  }

  createEpics() {
    return action$ => action$
      .ofType(PushNotificationActions.PUSH_SUBSCRIPTION_REQUESTED)
      .pipe(
        flatMap(action => this.register()),
        switchMap(sub => this.sendSubscriptionToBackend(sub)
          .pipe(
            map(() => this.actions.subscriptionAdded()),
            catchError(error => of(this.actions.subscriptionFailed()))
          )
        )
      );
  }

  private register() {
    const applicationServerKey = 'BI8fL00tA1vjDQjbqKwh4B61gkRdifSc7tV82sUxmugcSENDYJXZjnvYi07NEugNnL7UAj2EZ0Qo5_oXs_JC-xs';
    return this.serviceWorker.registerForPush({applicationServerKey});
  }

  private sendSubscriptionToBackend(subscription) {
    const url = '/api/sfs/subscription';
    return this.http.post(url, {subscription, userId: this.userId});
  }

}
