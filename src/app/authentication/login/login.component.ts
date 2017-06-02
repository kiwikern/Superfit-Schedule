import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/root.types';
import { AuthenticationActions } from '../store/authentication.actions';

@Component({
  selector: 'sfs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private ngRedux: NgRedux<IAppState>,
              private authActions: AuthenticationActions) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const loginAction = this.authActions.login(this.userName, this.password);
    this.ngRedux.dispatch(loginAction);
  }

}
