import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../store/root-state.interface';
import { NgRedux } from '@angular-redux/store';
import { AuthenticationActions } from '../store/authentication.actions';

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

  constructor(private ngRedux: NgRedux<IAppState>,
              private authActions: AuthenticationActions) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const registerAction = this.authActions.register({
      userName: this.userName,
      mailAddress: this.mailAddress,
      password: this.password
    });
    this.ngRedux.dispatch(registerAction);
  }

}
