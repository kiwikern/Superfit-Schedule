import { Injectable } from '@angular/core';
import { OnboardingActions } from './onboarding.actions';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Action } from 'redux';
import { ofType } from 'redux-observable';

@Injectable()
export class OnboardingEpics {

  @select(['onboarding', 'general']) readonly generalVersion$: Observable<number>;
  private generalVersion: number;

  constructor(private actions: OnboardingActions,
              private router: Router) {
    this.generalVersion$.subscribe(generalVersion => this.generalVersion = generalVersion);
  }

  epics = action$ => action$
    .pipe(
      ofType(OnboardingActions.CHECK_GENERAL_ONBOARDING_VERSION),
      map((action: Action) => this.checkGeneralVersion()),
    );

  private checkGeneralVersion() {
    switch (this.generalVersion) {
      case 0:
      case null:
      case undefined:
        this.router.navigate(['onboarding', {outlets: {onboarding: ['start']}}]);
        return this.actions.incrementGeneralOnboardingVersion();
      default:
        return this.actions.confirmOnboardingVersion();
    }
  }

}
