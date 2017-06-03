import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './store/auth-guard/auth.guard';
import { UserNameInputComponent } from './user-name-input/user-name-input.component';

const authenticationRoutes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: '', component: AccountComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    SfsMaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(authenticationRoutes),
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  declarations: [
    RegistrationComponent,
    LoginComponent,
    ResetPasswordComponent,
    AccountComponent,
    UserNameInputComponent
  ]
})
export class AuthenticationModule {
}
