import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import { dispatch } from '@angular-redux/store';

@Injectable()
export class AuthenticationActions {
  static readonly LOGIN_REQUESTED = 'LOGIN_REQUESTED';
  static readonly LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static readonly LOGIN_FAILED = 'LOGIN_FAILED';
  static readonly LOGOUT = 'LOGOUT';
  static readonly REGISTRATION_REQUESTED = 'REGISTRATION_REQUESTED';
  static readonly REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
  static readonly REGISTRATION_FAILED = 'REGISTRATION_FAILED';
  static readonly RESET_PASSWORD_REQUESTED = 'RESET_PASSWORD_REQUESTED';
  static readonly RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
  static readonly RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';
  static readonly CHANGE_PASSWORD_REQUESTED = 'CHANGE_PASSWORD_REQUESTED';
  static readonly CHANGE_PASSWORD_FAILED = 'CHANGE_PASSWORD_FAILED';
  static readonly CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
  static readonly SET_USER_ID = 'SET_USER_ID';

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
    this.angulartics.eventTrack.next({action: 'registerFailed', properties: {}});
    return {
      type: AuthenticationActions.REGISTRATION_FAILED
    };
  }

  @dispatch()
  requestResetPassword(mailAddress, captcha) {
    return {
      type: AuthenticationActions.RESET_PASSWORD_REQUESTED,
      payload: {mailAddress, captcha}
    };
  }

  resetPasswordSuccess() {
    return {
      type: AuthenticationActions.RESET_PASSWORD_SUCCESS
    };
  }

  resetPasswordFailed(error) {
    this.angulartics.exceptionTrack.next({description: JSON.stringify(error)});
    return {
      type: AuthenticationActions.RESET_PASSWORD_FAILED,
      payload: error
    };
  }

  @dispatch()
  changePassword(password: string, token: string) {
    this.angulartics.eventTrack.next({action: 'changePassword', properties: {}});
    return {
      type: AuthenticationActions.CHANGE_PASSWORD_REQUESTED,
      payload: {password, token}
    };
  }

  changePasswordSuccess() {
    return {
      type: AuthenticationActions.CHANGE_PASSWORD_SUCCESS
    };
  }

  changePasswordFailed(error) {
    return {
      type: AuthenticationActions.CHANGE_PASSWORD_FAILED,
      payload: error
    };
  }

  @dispatch()
  setUserId(id: string) {
    return {
      type: AuthenticationActions.SET_USER_ID,
      payload: id
    };
  }
}
