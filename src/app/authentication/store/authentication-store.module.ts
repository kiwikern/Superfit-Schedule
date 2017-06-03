import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationActions } from './authentication.actions';
import { AuthenticationEpics } from './authentication.epics';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { AuthGuard } from './auth-guard/auth.guard';
import { AuthService } from './auth-service/auth.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthenticationActions,
    AuthenticationEpics,
    AuthGuard,
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
