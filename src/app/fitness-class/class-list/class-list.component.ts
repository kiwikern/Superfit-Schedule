import { Component } from '@angular/core';
import { RootActions } from '../../store/root.actions';
import { IAppState } from '../../store/root.types';
import { NgRedux, select } from '@angular-redux/store';
import { IFilterState } from '../fitness-class.types';

@Component({
  selector: 'sfs-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent {
  @select(['schedule', 'schedule']) readonly schedule$;
  @select() readonly filter$;
  private filter: IFilterState = {};
  constructor(ngRedux: NgRedux<IAppState>,
              action: RootActions) {

    ngRedux.dispatch(action.loadSchedule());
    this.filter$.subscribe(f => this.filter = f);
  }

}
