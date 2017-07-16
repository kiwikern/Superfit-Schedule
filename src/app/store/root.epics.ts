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
import { ChangesEpics } from '../fitness-schedule/store/changes/changes.epics';
import { ResetPasswordEpics } from '../authentication/store/reset-password.epics';
import { ChangePasswordEpics } from '../authentication/store/change-password.epics';

@Injectable()
export class RootEpics {
  constructor(private scheduleEpics: ScheduleEpics,
              private pushNotificationEpics: PushNotificationEpics,
              private authenticationEpics: AuthenticationEpics,
              private resetPasswordEpics: ResetPasswordEpics,
              private changePasswordEpics: ChangePasswordEpics,
              private syncRequestedEpics: SyncRequestedEpics,
              private syncActivatedEpics: SyncActivatedEpics,
              private registrationEpics: RegistrationEpics,
              private changeEpics: ChangesEpics) {
  }

  createEpics() {
    return [
      createEpicMiddleware(this.scheduleEpics.createEpics()),
      createEpicMiddleware(this.pushNotificationEpics.createEpics()),
      createEpicMiddleware(this.authenticationEpics.createEpics()[0]),
      createEpicMiddleware(this.authenticationEpics.createEpics()[1]),
      createEpicMiddleware(this.authenticationEpics.createEpics()[2]),
      // ...this.authenticationEpics.createEpics().map(createEpicMiddleware),
      createEpicMiddleware(this.syncRequestedEpics.createEpics()),
      createEpicMiddleware(this.syncActivatedEpics.createEpics()),
      createEpicMiddleware(this.registrationEpics.createEpics()),
      createEpicMiddleware(this.changeEpics.createEpics()),
      createEpicMiddleware(this.resetPasswordEpics.createEpics()),
      createEpicMiddleware(this.changePasswordEpics.createEpics())
    ];
  }
}
