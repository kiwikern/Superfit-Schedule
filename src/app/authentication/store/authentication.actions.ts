import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationActions {
  static readonly LOGIN_REQUESTED = 'LOGIN_REQUESTED';
  static readonly LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static readonly LOGIN_FAILED = 'LOGIN_FAILED';
  static readonly REGISTRATION_REQUESTED = 'REGISTRATION_REQUESTED';
  static readonly REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
  static readonly REGISTRATION_FAILED = 'REGISTRATION_FAILED';

   login(userName: string, password: string) {
    return {
      type: AuthenticationActions.LOGIN_REQUESTED,
      payload: {userName, password}
    };
  }

  loginSuccess(jwtToken) {
    return {
      type: AuthenticationActions.LOGIN_SUCCESS,
      payload: jwtToken
    };
  }

  loginFailed() {
    return {
      type: AuthenticationActions.LOGIN_FAILED,
    };
  }
}
