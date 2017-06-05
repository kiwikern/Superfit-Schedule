/**
 * Created by Kim on 02.04.2017.
 */
import { Injectable } from '@angular/core';
import { SettingsPayload } from './settings.reducers';
import { SettingsState } from './settings-state';

@Injectable()
export class SettingsActions {
  static readonly SETTING_CHANGED = 'SETTING_CHANGED';
  static readonly SETTING_SET = 'SETTING_SET';

  changeSetting(payload: SettingsPayload) {
    return {
      type: SettingsActions.SETTING_CHANGED,
      payload
    };
  }

  setSettings(payload: SettingsState) {
    return {
      type: SettingsActions.SETTING_SET,
      payload
    };
  }
}
