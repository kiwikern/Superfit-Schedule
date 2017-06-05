import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/root-state.interface';
import { AuthenticationActions } from '../store/authentication.actions';

@Component({
  selector: 'sfs-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @select(['authentication', 'userName']) userName$;

  constructor(private ngRedux: NgRedux<IAppState>,
              private authActions: AuthenticationActions) {
  }

  ngOnInit() {
  }

  logout() {
    this.ngRedux.dispatch(this.authActions.logout());
  }

}
