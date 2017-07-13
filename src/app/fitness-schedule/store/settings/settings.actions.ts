import { Injectable } from '@angular/core';
import { SettingsPayload } from './settings-payload';
import { SettingsState } from './settings-state';
import { dispatch } from '@angular-redux/store';
import { Angulartics2 } from 'angulartics2';

@Injectable()
export class SettingsActions {
  static readonly SETTING_CHANGED = 'SETTING_CHANGED';
  static readonly SETTING_SET = 'SETTING_SET';

  constructor(private angulartics: Angulartics2) {
  }

  @dispatch()
  changeSetting(payload: SettingsPayload) {
    this.angulartics.eventTrack.next({action: 'changeSetting', properties: {category: JSON.stringify(payload)}});
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
