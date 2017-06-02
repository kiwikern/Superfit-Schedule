import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/root-state.interface';
import { SyncActions } from '../sync.actions';

@Component({
  selector: 'sfs-sync-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @select() sync$;

  constructor(private ngRedux: NgRedux<IAppState>,
              private actions: SyncActions) {
  }

  ngOnInit() {
  }

  requestSync() {
    this.ngRedux.dispatch(this.actions.sync());
  }

}
