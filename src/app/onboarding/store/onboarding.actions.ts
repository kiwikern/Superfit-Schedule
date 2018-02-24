import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';

@Injectable()
export class OnboardingActions {
  static readonly CHECK_GENERAL_ONBOARDING_VERSION = 'CHECK_GENERAL_ONBOARDING_VERSION';
  static readonly INCREMENT_GENERAL_ONBOARDING_VERSION = 'INCREMENT_GENERAL_ONBOARDING_VERSION';
  static readonly CONFIRM_GENERAL_ONBOARDING_VERSION = 'CONFIRM_GENERAL_ONBOARDING_VERSION';

  constructor() {
  }

  @dispatch()
  checkGeneralOnboardingVersion(): Action {
    return {
      type: OnboardingActions.CHECK_GENERAL_ONBOARDING_VERSION
    };
  }

  incrementGeneralOnboardingVersion(): Action {
    return {
      type: OnboardingActions.INCREMENT_GENERAL_ONBOARDING_VERSION
    };
  }

  confirmOnboardingVersion(): Action {
    return {
      type: OnboardingActions.CONFIRM_GENERAL_ONBOARDING_VERSION
    };
  }

}
