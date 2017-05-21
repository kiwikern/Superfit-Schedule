import { Injectable } from '@angular/core';

@Injectable()
export class PushNotificationActions {
  static readonly PUSH_SUBSCRIPTION_REQUESTED = 'PUSH_SUBSCRIPTION_REQUESTED';
  static readonly PUSH_SUBSCRIPTION_ADDED = 'PUSH_SUBSCRIPTION_ADDED';
  static readonly PUSH_SUBSCRIPTION_FAILED = 'PUSH_SUBSCRIPTION_FAILED';

  addPushSubscription() {
    return {
      type: PushNotificationActions.PUSH_SUBSCRIPTION_REQUESTED
    };
  }

  subscriptionAdded() {
    return {
      type: PushNotificationActions.PUSH_SUBSCRIPTION_ADDED
    };
  }

  subscriptionFailed() {
    return {
      type: PushNotificationActions.PUSH_SUBSCRIPTION_FAILED
    };
  }
}
