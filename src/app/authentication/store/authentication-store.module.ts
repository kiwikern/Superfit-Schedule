import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationActions } from './authentication.actions';
import { AuthenticationEpics } from './authentication.epics';
import { AuthService } from './auth-service/auth.service';
import { RegistrationEpics } from './registration-registration.epics';
import { ResetPasswordEpics } from './reset-password.epics';
import { ChangePasswordEpics } from './change-password.epics';
import { select } from '@angular-redux/store';

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
