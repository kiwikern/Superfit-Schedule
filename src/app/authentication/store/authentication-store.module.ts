import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationActions } from './authentication.actions';
import { AuthenticationEpics } from './authentication.epics';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { AuthService } from './auth-service/auth.service';
import { RegistrationEpics } from './registration-registration.epics';
import { ResetPasswordEpics } from './reset-password.epics';
import { ChangePasswordEpics } from './change-password.epics';
import { select } from '@angular-redux/store';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  const config = {
    tokenName: 'token',
    tokenGetter: (() => {
      try {
        return JSON.parse(localStorage.getItem('sfs.state')).authentication.jwt;
      } catch (error) {
        return null;
      }
    })
  };
  return new AuthHttp(new AuthConfig(config), http, options);
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthenticationActions,
    AuthenticationEpics,
    RegistrationEpics,
    ResetPasswordEpics,
    ChangePasswordEpics,
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class AuthenticationStoreModule {
  @select(['authentication', 'userId']) userId$;

  constructor(authActions: AuthenticationActions) {
    // TODO: remove in sep 2017
    this.userId$.subscribe(userId => {
      if (!userId) {
        const randomUserId = Date.now() + '_gen_' + Math.random().toString(36).substring(2, 15);
        authActions.setUserId(randomUserId);
      }
    });
  }

}
