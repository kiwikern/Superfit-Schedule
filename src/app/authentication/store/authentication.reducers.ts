import { AuthenticationState } from './authentication-state.interface';
import { AuthenticationActions } from './authentication.actions';
import { IPayloadAction } from '../../store/payload-action.types';

/**
 * Created by Kim on 21.05.2017.
 */

export const INITIAL_STATE: AuthenticationState = {
  isRequesting: false,
  userId: Date.now() + '_gen_' + Math.random().toString(36).substring(2, 15)
};

export function authenticationReducer(state: AuthenticationState = INITIAL_STATE,
                                      action: IPayloadAction<any>): AuthenticationState {

  switch (action.type) {
    case AuthenticationActions.LOGIN_REQUESTED:
      return {
        isRequesting: true,
        userId: state.userId
      };
    case AuthenticationActions.REGISTRATION_SUCCESS:
    case AuthenticationActions.LOGIN_SUCCESS:
      return {
        isRequesting: false,
        jwt: action.payload.jwt,
        userName: action.payload.userName,
        userId: action.payload.userId
      };
    case AuthenticationActions.REGISTRATION_FAILED:
    case AuthenticationActions.LOGIN_FAILED: {
      return {
        isRequesting: false,
        userId: state.userId
      };
    }
    case AuthenticationActions.LOGOUT: {
      return {
        isRequesting: false,
        userId: state.userId
      };
    }
    case AuthenticationActions.SET_USER_ID: {
      return {
        isRequesting: false,
        userId: action.payload
      };
    }
  }

  return state;
}
