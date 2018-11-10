import { Injectable } from '@angular/core';
import { PushNotificationActions } from './push-notification.actions';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { select } from '@angular-redux/store';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { Logger } from '../common/logger.service';
import { ShowPushnotificationsState } from '../fitness-schedule/store/settings/settings-state';

@Injectable()
export class PushNotificationEpics {

  @select(['authentication', 'userId']) userId$: Observable<string>;
  @select(['settings', 'showPushNotifications']) showPushNotifications$: Observable<ShowPushnotificationsState>;
  private userId: string;

  constructor(private serviceWorker: SwPush,
              private http: HttpClient,
              private logger: Logger,
              private actions: PushNotificationActions) {
    this.userId$.subscribe(userId => this.userId = userId);
    this.showPushNotifications$.pipe(
      filter(shouldShowNotification => shouldShowNotification === ShowPushnotificationsState.ENABLED),
      tap(() => this.actions.addPushSubscription()),
      switchMap(() => this.register().pipe(
        switchMap((sub: PushSubscription) => {
            if (sub) {
              return this.sendSubscriptionToBackend(sub).pipe(
                map(() => this.actions.subscriptionAdded()),
                catchError(error => {
                  this.logger.error(error);
                  return of(this.actions.subscriptionFailed());
                }));
            } else {
              return of(this.actions.subscriptionFailed());
            }
          }
        )
      )),
    ).subscribe();
  }

  private register(): Observable<PushSubscription> {
    const serverPublicKey = 'BI8fL00tA1vjDQjbqKwh4B61gkRdifSc7tV82sUxmugcSENDYJXZjnvYi07NEugNnL7UAj2EZ0Qo5_oXs_JC-xs';
    return from(this.serviceWorker.requestSubscription({serverPublicKey}));
  }

  private sendSubscriptionToBackend(subscription: PushSubscription) {
    const url = '/api/sfs/subscription';
    const body = {subscription: subscription.toJSON(), userId: this.userId};
    return this.http.post(url, body, {responseType: 'text'});
  }

}
