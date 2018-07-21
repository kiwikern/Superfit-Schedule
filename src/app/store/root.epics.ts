/**
 * Created by Kim on 02.04.2017.
 */
import { Injectable } from '@angular/core';
import { ScheduleEpics } from '../fitness-schedule/store/schedule/schedule.epics';
import { combineEpics } from 'redux-observable';
import { PushNotificationEpics } from '../push-notification/push-notification.epics';
import { AuthenticationEpics } from '../authentication/store/authentication.epics';
import { SyncRequestedEpics } from '../sync/sync-requested.epics';
import { SyncActivatedEpics } from '../sync/sync-activated.epics';
import { RegistrationEpics } from '../authentication/store/registration-registration.epics';
import { ChangesEpics } from '../fitness-schedule/store/changes/changes.epics';
import { ResetPasswordEpics } from '../authentication/store/reset-password.epics';
import { ChangePasswordEpics } from '../authentication/store/change-password.epics';
import { ReleasenotesEpics } from '../releasenotes/store/releasenotes.epics';
import { FeedbackEpics } from '../feedback/store/feedback.epics';
import { CommentsEpics } from '../fitness-schedule/store/schedule/comments.epics';
import { OnboardingEpics } from '../onboarding/store/onboarding.epics';

@Injectable()
export class RootEpics {
  createEpics() {
    return combineEpics(
      this.scheduleEpics.epics,
      this.pushNotificationEpics.epics,
      this.authenticationEpics.epics,
      this.syncRequestedEpics.epics,
      this.syncActivatedEpics.epics,
      this.registrationEpics.epics,
      this.changeEpics.epics,
      this.resetPasswordEpics.epics,
      this.commentsEpics.epics,
      this.releasenotesEpics.epics,
      this.feedbackEpics.epics,
      this.changePasswordEpics.epics,
      this.onboardingEpics.epics
    );
  }

  constructor(private scheduleEpics: ScheduleEpics,
              private pushNotificationEpics: PushNotificationEpics,
              private authenticationEpics: AuthenticationEpics,
              private resetPasswordEpics: ResetPasswordEpics,
              private changePasswordEpics: ChangePasswordEpics,
              private syncRequestedEpics: SyncRequestedEpics,
              private syncActivatedEpics: SyncActivatedEpics,
              private registrationEpics: RegistrationEpics,
              private releasenotesEpics: ReleasenotesEpics,
              private feedbackEpics: FeedbackEpics,
              private commentsEpics: CommentsEpics,
              private changeEpics: ChangesEpics,
              private onboardingEpics: OnboardingEpics) {
  }
}
