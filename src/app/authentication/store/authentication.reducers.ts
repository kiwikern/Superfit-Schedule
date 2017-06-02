import { AuthenticationState } from './authentication-state.interface';
import { AuthenticationActions } from './authentication.actions';
import { IPayloadAction } from '../../store/payload-action.types';
/**
 * Created by Kim on 21.05.2017.
 */

export const INITIAL_STATE: AuthenticationState = {
  isLoggedIn: false,
  isRequesting: false
};

export function authenticationReducer(state: AuthenticationState = INITIAL_STATE,
                                      action: IPayloadAction<any>): AuthenticationState {

  switch (action.type) {
    case AuthenticationActions.LOGIN_REQUESTED:
      return {
        isLoggedIn: state.isLoggedIn,
        isRequesting: true
      };
    case AuthenticationActions.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        isRequesting: false,
        jwt: action.payload.jwt,
        userName: action.payload.userName
      };
    case AuthenticationActions.LOGIN_FAILED: {
      return {
        isLoggedIn: false,
        isRequesting: false
      };
    }
    case AuthenticationActions.LOGOUT: {
      return {
        isLoggedIn: false,
        isRequesting: false
      };
    }
  }

  return state;
}
