import { IPayloadAction } from '../../../store/payload-action.types';
import { SettingsActions } from './settings.actions';
import { SettingsState } from './settings-state';
/**
 * Created by Kim on 02.04.2017.
 */

export const INITIAL_STATE: SettingsState = {
  showDaysInClasses: true,
  showSingleStudio: true,
  showTodayFirst: true,
  daysLayout: ''
};

export function settingsReducer(state: SettingsState = INITIAL_STATE,
                                action: IPayloadAction<SettingsPayload>): SettingsState {
  let newState;
  switch (action.type) {
    case SettingsActions.SETTING_CHANGED:
      newState = {...state};
      newState[action.payload.name] = action.payload.value;
      break;
    default:
      newState = state;
  }

  return newState;
}


export interface SettingsPayload {
  name: string;
  value: any;
}