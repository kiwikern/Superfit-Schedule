import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationActions } from './authentication.actions';
import { AuthenticationEpics } from './authentication.epics';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { AccountAuthGuard } from './auth-guards/account-auth.guard';
import { AuthService } from './auth-service/auth.service';
import { RegistrationEpics } from './registration-registration.epics';
import { ResetPasswordEpics } from './reset-password.epics';
import { ChangePasswordEpics } from './change-password.epics';

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
}
