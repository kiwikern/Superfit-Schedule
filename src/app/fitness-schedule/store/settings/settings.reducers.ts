import { IPayloadAction } from '../../../store/payload-action.types';
import { SettingsActions } from './settings.actions';
import { SettingsState } from './settings-state';
import { SettingsPayload } from './settings-payload';
/**
 * Created by Kim on 02.04.2017.
 */

const INITIAL_STATE: SettingsState = {
  showDaysInClasses: true,
  showSingleStudio: true,
  showTodayFirst: true,
  showWorkoutType: false,
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
    case SettingsActions.SETTING_SET:
      if (action.payload) {
        newState = action.payload;
      } else {
        newState = state;
      }
      break;
    default:
      newState = state;
  }

  return newState;
}
