import { Component } from '@angular/core';
import { RootActions } from '../../store/root.actions';
import { IAppState } from '../../store/root.types';
import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'sfs-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent {
  @select() readonly schedule$;

  constructor(ngRedux: NgRedux<IAppState>,
              action: RootActions) {
    ngRedux.dispatch(action.loadSchedule());
  }
}
