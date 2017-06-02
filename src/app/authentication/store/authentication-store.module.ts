import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationActions } from './authentication.actions';
import { AuthenticationEpics } from './authentication.epics';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthenticationActions,
    AuthenticationEpics
  ]
})
export class AuthenticationStoreModule {
}
