import { Injectable } from '@angular/core';
import { SettingsPayload } from './settings-payload';
import { SettingsState } from './settings-state';
import { dispatch } from '@angular-redux/store';

@Injectable()
export class SettingsActions {
  static readonly SETTING_CHANGED = 'SETTING_CHANGED';
  static readonly SETTING_SET = 'SETTING_SET';

  @dispatch()
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
