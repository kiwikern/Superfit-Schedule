import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const authenticationRoutes: Routes = [
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SfsMaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(authenticationRoutes)
  ],
  declarations: [RegistrationComponent]
})
export class AuthenticationModule { }
