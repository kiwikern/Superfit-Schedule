import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../store/root-state.interface';
import { NgRedux } from '@angular-redux/store';
import { AuthenticationActions } from '../store/authentication.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sfs-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userName: string;
  mailAddress: string;
  password: string;
  passwordConfirmation: string;
  redirectTo: string;

  constructor(private ngRedux: NgRedux<IAppState>,
              private route: ActivatedRoute,
              private authActions: AuthenticationActions) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => this.redirectTo = params.get('route'));
  }

  onSubmit() {
    const registerAction = this.authActions.register({
      userName: this.userName,
      mailAddress: this.mailAddress,
      password: this.password,
      redirectTo: this.redirectTo
    });
    this.ngRedux.dispatch(registerAction);
  }

}
