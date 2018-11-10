import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { SettingsActions } from '../store/settings/settings.actions';
import { SettingsPayload } from '../store/settings/settings-payload';

@Component({
  selector: 'sfs-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  @select(['settings', 'daysLayout']) daysLayout$;
  @select(['settings', 'showTodayFirst']) showTodayFirst$;
  @select(['settings', 'showStudio']) showStudio$;
  @select(['settings', 'showDaysInClasses']) showDaysInClasses$;
  @select(['settings', 'showWorkoutType']) showWorkoutType$;
  @select(['settings', 'showPushNotifications']) showPushNotifications$;
  @select(['settings', 'hideReleasenotes']) hideReleasenotes$;

  constructor(private actions: SettingsActions) {
  }

  changeSetting(name: string, value: string | boolean) {
    const payload: SettingsPayload = {name, value};
    this.actions.changeSetting(payload);
  }

}
