/**
 * Created by Kim on 02.04.2017.
 */
 import { Injectable } from '@angular/core';
import { SettingsPayload } from './settings.reducers';

@Injectable()
export class SettingsActions {
  static readonly SETTING_CHANGED= 'SETTING_CHANGED';

  changeSetting(payload: SettingsPayload) {
    return {
      type: SettingsActions.SETTING_CHANGED,
    payload: {
      name: payload.name,
      value: payload.value
    }
    };
  }
}
