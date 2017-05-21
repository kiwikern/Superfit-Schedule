import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PushNotificationEpics } from './push-notification.epics';
import { PushNotificationActions } from './push-notification.actions';

@NgModule({
  imports: [
    CommonModule,
    ServiceWorkerModule
  ],
  declarations: [],
  providers: [
    PushNotificationEpics,
    PushNotificationActions
  ]
})
export class PushNotificationModule { }
