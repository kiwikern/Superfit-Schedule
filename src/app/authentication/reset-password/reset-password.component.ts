import { Component, OnInit } from '@angular/core';
import { AuthenticationActions } from '../store/authentication.actions';

@Component({
  selector: 'sfs-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  mailAddress: string;
  captcha: boolean;
  captchaResponse: string;

  constructor(private authActions: AuthenticationActions) {
  }

  ngOnInit() {
  }

  onSubmit() {
   this.authActions.requestResetPassword(this.mailAddress, this.captchaResponse);
  }

}
