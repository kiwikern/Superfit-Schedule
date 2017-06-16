import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { SettingsActions } from '../store/settings/settings.actions';
import { IAppState } from '../../store/root-state.interface';
import { SettingsPayload } from '../store/settings/settings.reducers';

@Component({
  selector: 'sfs-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  @select(['settings', 'daysLayout']) daysLayout$;
  @select(['settings', 'showTodayFirst']) showTodayFirst$;
  @select(['settings', 'showSingleStudio']) showSingleStudio$;
  @select(['settings', 'showDaysInClasses']) showDaysInClasses$;
  @select(['settings', 'useCompactLayout']) useCompactLayout$;
  @select(['settings', 'showWorkoutType']) showWorkoutType$;

  constructor(private ngRedux: NgRedux<IAppState>,
              private actions: SettingsActions) {
  }

  changeSetting(name: string, value: string | boolean) {
    const payload: SettingsPayload = {name, value};
    this.ngRedux.dispatch(this.actions.changeSetting(payload));
  }

}
