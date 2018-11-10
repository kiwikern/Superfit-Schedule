import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

@Injectable()
export class PushNotificationActions {
  static readonly PUSH_SUBSCRIPTION_REQUESTED = 'PUSH_SUBSCRIPTION_REQUESTED';
  static readonly PUSH_SUBSCRIPTION_ADDED = 'PUSH_SUBSCRIPTION_ADDED';
  static readonly PUSH_SUBSCRIPTION_FAILED = 'PUSH_SUBSCRIPTION_FAILED';

  @dispatch()
  addPushSubscription() {
    return {
      type: PushNotificationActions.PUSH_SUBSCRIPTION_REQUESTED
    };
  }

  @dispatch()
  subscriptionAdded() {
    return {
      type: PushNotificationActions.PUSH_SUBSCRIPTION_ADDED
    };
  }

  @dispatch()
  subscriptionFailed() {
    return {
      type: PushNotificationActions.PUSH_SUBSCRIPTION_FAILED
    };
  }
}
