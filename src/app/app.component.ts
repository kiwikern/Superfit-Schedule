import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { RootActions } from './store/root.actions';
import { IAppState } from './store/root.types';

@Component({
  selector: 'sfs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(ngRedux: NgRedux<IAppState>,
  action: RootActions) {
    ngRedux.dispatch(action.loadSchedule());
  }
}
