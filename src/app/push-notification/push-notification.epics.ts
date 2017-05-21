import { Injectable } from '@angular/core';
import { PushNotificationActions } from './push-notification.actions';
import { Http } from '@angular/http';
import { NgServiceWorker } from '@angular/service-worker';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PushNotificationEpics {

  constructor(private serviceWorker: NgServiceWorker,
              private http: Http,
              private actions: PushNotificationActions) {
  }

  createEpics() {
    return action$ => action$
      .ofType(PushNotificationActions.PUSH_SUBSCRIPTION_REQUESTED)
      .switchMap(action => this.register()
        .map(sub => this.sendSubscriptionToBackend(sub))
        .map(() => this.actions.subscriptionAdded())
        .catch(error => of(this.actions.subscriptionFailed()))
      );
  }

  private register() {
    const applicationServerKey = 'BI8fL00tA1vjDQjbqKwh4B61gkRdifSc7tV82sUxmugcSENDYJXZjnvYi07NEugNnL7UAj2EZ0Qo5_oXs_JC-xs';
    return this.serviceWorker.registerForPush({applicationServerKey});
  }

  private sendSubscriptionToBackend(subscription) {
    const url = 'api/sfs/subscription';
    return this.http.post(url, subscription);
  }

}
