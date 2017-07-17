import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { AccountComponent } from './account/account.component';
import { AccountAuthGuard } from './store/auth-guards/account-auth.guard';
import { UserNameInputComponent } from './user-name-input/user-name-input.component';
import { MailAddressInputComponent } from './mail-address-input/mail-address-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PasswordConfirmationInputComponent } from './password-confirmation-input/password-confirmation-input.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginAuthGuard } from './store/auth-guards/login-auth.guard';

const authenticationRoutes: Routes = [
  {path: 'registration', component: RegistrationComponent, canActivate: [LoginAuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [LoginAuthGuard]},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: '', component: AccountComponent, canActivate: [AccountAuthGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    SfsMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(authenticationRoutes),
    RecaptchaModule
  ],
  declarations: [
    RegistrationComponent,
    LoginComponent,
    ResetPasswordComponent,
    AccountComponent,
    UserNameInputComponent,
    MailAddressInputComponent,
    PasswordInputComponent,
    PasswordConfirmationInputComponent,
    ChangePasswordComponent
  ],
  providers: [
    AccountAuthGuard,
    LoginAuthGuard
  ]
})
export class AuthenticationModule {
}
