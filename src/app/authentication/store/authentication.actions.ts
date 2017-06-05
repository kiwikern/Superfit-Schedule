import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationActions {
  static readonly LOGIN_REQUESTED = 'LOGIN_REQUESTED';
  static readonly LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static readonly LOGIN_FAILED = 'LOGIN_FAILED';
  static readonly LOGOUT = 'LOGOUT';
  static readonly REGISTRATION_REQUESTED = 'REGISTRATION_REQUESTED';
  static readonly REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
  static readonly REGISTRATION_FAILED = 'REGISTRATION_FAILED';

  loginWithUserName(userName: string, password: string) {
    return {
      type: AuthenticationActions.LOGIN_REQUESTED,
      payload: {userName, password}
    };
  }

  loginWithMailAddress(mailAddress: string, password: string) {
    return {
      type: AuthenticationActions.LOGIN_REQUESTED,
      payload: {mailAddress, password}
    };
  }

  loginSuccess(userName, jwt) {
    return {
      type: AuthenticationActions.LOGIN_SUCCESS,
      payload: {userName, jwt}
    };
  }

  loginFailed() {
    return {
      type: AuthenticationActions.LOGIN_FAILED
    };
  }

  logout() {
    return {
      type: AuthenticationActions.LOGOUT
    };
  }

  register(payload) {
    return {
      type: AuthenticationActions.REGISTRATION_REQUESTED,
      payload
    };
  }

  registerSuccess(userName, jwt) {
    return {
      type: AuthenticationActions.REGISTRATION_SUCCESS,
      payload: {userName, jwt}
    };
  }

  registerFailed() {
    return {
      type: AuthenticationActions.REGISTRATION_FAILED
    };
  }
}
