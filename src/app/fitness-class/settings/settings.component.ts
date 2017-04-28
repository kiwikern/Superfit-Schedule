import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { SettingsActions } from '../store/settings.actions';
import { IAppState } from '../../store/root.types';
import { SettingsPayload } from '../store/settings.reducers';

@Component({
  selector: 'sfs-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  @select(['settings', 'daysLayout']) daysLayout$;
  daysLayout = 'row';
  @select(['settings', 'showTodayFirst']) showTodayFirst$;
  showTodayFirst = 'true';
  @select(['settings', 'showSingleStudio']) showSingleStudio$;
  showSingleStudio = true;
  @select(['settings', 'showDaysInClasses']) showDaysInClasses$;
  showDaysInClasses = true;
  constructor(private ngRedux: NgRedux<IAppState>,
              private actions: SettingsActions) {
    this.daysLayout$.subscribe(layout => this.daysLayout = layout);
    this.showTodayFirst$.subscribe(show => this.showTodayFirst = show+'');
    this.showSingleStudio$.subscribe(show => this.showSingleStudio = show);
    this.showDaysInClasses$.subscribe(show => this.showDaysInClasses = show);
  }

  changeSetting(name:string, value: string | boolean) {
    const payload:SettingsPayload = {name, value};
    this.ngRedux.dispatch(this.actions.changeSetting(payload));
  }

}
