import { OnboardingState } from './onboarding-state.interface';
import { OnboardingActions } from './onboarding.actions';
import { Action } from 'redux';

export const INITIAL_STATE: OnboardingState = {
  general: 0
};

export function onboardingReducer(state: OnboardingState = INITIAL_STATE,
                                action: Action): OnboardingState {

  const newState = Object.assign({}, state);
  switch (action.type) {
    case OnboardingActions.INCREMENT_GENERAL_ONBOARDING_VERSION:
      newState.general++;
      break;
  }


  return newState;
}
