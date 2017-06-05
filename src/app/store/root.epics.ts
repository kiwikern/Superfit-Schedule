/**
 * Created by Kim on 02.04.2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ScheduleEpics } from '../fitness-schedule/store/schedule/schedule.epics';
import { createEpicMiddleware } from 'redux-observable';
import { PushNotificationEpics } from '../push-notification/push-notification.epics';
import { AuthenticationEpics } from '../authentication/store/authentication.epics';
import { SyncRequestedEpics } from '../sync/sync-requested.epics';
import { SyncActivatedEpics } from '../sync/sync-activated.epics';
import { RegistrationEpics } from '../authentication/store/registration-registration.epics';

@Injectable()
export class RootEpics {
  constructor(private scheduleEpics: ScheduleEpics,
              private pushNotificationEpics: PushNotificationEpics,
              private authenticationEpics: AuthenticationEpics,
              private syncRequestedEpics: SyncRequestedEpics,
              private syncActivatedEpics: SyncActivatedEpics,
              private registrationEpics: RegistrationEpics) {
  }

  createEpics() {
    return [
      createEpicMiddleware(this.scheduleEpics.createEpics()),
      createEpicMiddleware(this.pushNotificationEpics.createEpics()),
      ...this.authenticationEpics.createEpics().map(createEpicMiddleware),
      createEpicMiddleware(this.syncRequestedEpics.createEpics()),
      createEpicMiddleware(this.syncActivatedEpics.createEpics()),
      createEpicMiddleware(this.registrationEpics.createEpics())
    ];
  }
}
