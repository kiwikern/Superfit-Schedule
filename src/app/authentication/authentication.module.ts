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
import { AuthenticationActions } from './store/authentication.actions';
import { AuthenticationEpics } from './store/authentication.epics';

const authenticationRoutes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reset-password', component: ResetPasswordComponent}
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
    ResetPasswordComponent
  ],
  providers: [
    AuthenticationActions,
    AuthenticationEpics
  ]
})
export class AuthenticationModule {
}
