import { PushNotificationState } from './push-notification-state.interface';
import { IPayloadAction } from '../store/payload-action.types';
import { PushNotificationActions } from './push-notification.actions';
/**
 * Created by Kim on 21.05.2017.
 */

export const INITIAL_STATE: PushNotificationState = {
  enabled: false,
  isRequesting: false
};

export function pushNotificationReducer(state: PushNotificationState = INITIAL_STATE,
                                        action: IPayloadAction<any>): PushNotificationState {

  switch (action.type) {
    case PushNotificationActions.PUSH_SUBSCRIPTION_REQUESTED:
      return {
        enabled: state.enabled,
        isRequesting: true
      };
    case PushNotificationActions.PUSH_SUBSCRIPTION_ADDED:
      return {
        enabled: true,
        isRequesting: false
      };
    case PushNotificationActions.PUSH_SUBSCRIPTION_FAILED: {
      return {
        enabled: false,
        isRequesting: false
      };
    }
  }

  return state;
}
