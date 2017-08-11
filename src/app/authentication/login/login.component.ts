import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/root-state.interface';
import { AuthenticationActions } from '../store/authentication.actions';
import { ActivatedRoute } from '@angular/router';

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
  redirectTo: string;

  constructor(private ngRedux: NgRedux<IAppState>,
              private route: ActivatedRoute,
              private authActions: AuthenticationActions) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => this.redirectTo = params.get('route'));
  }

  onSubmit() {
    let loginAction;
    if (this.useUserName === 'true') {
      loginAction = this.authActions.loginWithUserName(this.userName, this.password, this.redirectTo);
    } else {
      loginAction = this.authActions.loginWithMailAddress(this.mailAddress, this.password, this.redirectTo);
    }
    this.ngRedux.dispatch(loginAction);
  }

}
