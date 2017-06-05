import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/root-state.interface';
import { AuthenticationActions } from '../store/authentication.actions';

@Component({
  selector: 'sfs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  mailAddress: string;
  password: string;
  useUserName: string = 'true';

  constructor(private ngRedux: NgRedux<IAppState>,
              private authActions: AuthenticationActions) {
  }

  ngOnInit() {
  }

  onSubmit() {
    let loginAction;
    if (this.useUserName === 'true') {
      loginAction = this.authActions.loginWithUserName(this.userName, this.password);
    } else {
      loginAction = this.authActions.loginWithMailAddress(this.mailAddress, this.password);
    }
    this.ngRedux.dispatch(loginAction);
  }

}
