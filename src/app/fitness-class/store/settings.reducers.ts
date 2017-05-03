import { IPayloadAction } from '../../store/payload-action.types';
import { SettingsActions } from './settings.actions';
/**
 * Created by Kim on 02.04.2017.
 */

export const INITIAL_STATE: ISettingsState = {
  showDaysInClasses: true,
  showSingleStudio: true,
  showTodayFirst: true,
};

export function settingsReducer(state: ISettingsState = INITIAL_STATE,
                                action: IPayloadAction<SettingsPayload>): ISettingsState {
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

interface ISettingsState {
  showDaysInClasses: boolean;
  showSingleStudio: boolean;
  showTodayFirst: boolean;
  daysLayout?: string;
}

export interface SettingsPayload {
  name: string;
  value: any;
}
