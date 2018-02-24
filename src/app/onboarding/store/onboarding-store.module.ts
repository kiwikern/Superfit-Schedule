import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingActions } from './onboarding.actions';
import { OnboardingEpics } from './onboarding.epics';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    OnboardingActions,
    OnboardingEpics
  ]
})
export class OnboardingStoreModule { }
