import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

@Injectable()
export class AuthenticationActions {
  static readonly LOGIN_REQUESTED = 'LOGIN_REQUESTED';
  static readonly LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static readonly LOGIN_FAILED = 'LOGIN_FAILED';
  static readonly LOGOUT = 'LOGOUT';
  static readonly REGISTRATION_REQUESTED = 'REGISTRATION_REQUESTED';
  static readonly REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
  static readonly REGISTRATION_FAILED = 'REGISTRATION_FAILED';

  constructor(private angulartics: Angulartics2) {
  }

  loginWithUserName(userName: string, password: string) {
    this.angulartics.eventTrack.next({action: 'loginWithUserName', properties: {category: userName}});
    return {
      type: AuthenticationActions.LOGIN_REQUESTED,
      payload: {userName, password}
    };
  }

  loginWithMailAddress(mailAddress: string, password: string) {
    this.angulartics.eventTrack.next({action: 'loginWithMailAddress', properties: {category: mailAddress}});
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
    this.angulartics.eventTrack.next({action: 'register', properties: {category: payload.userName}});
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
    this.angulartics.eventTrack.next({action: 'registerFailed'});
    return {
      type: AuthenticationActions.REGISTRATION_FAILED
    };
  }
}
