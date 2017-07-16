import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationActions } from '../store/authentication.actions';

@Component({
  selector: 'sfs-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  private token: string;
  private password: string;
  private passwordConfirmation: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authActions: AuthenticationActions) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  onSubmit() {
    this.authActions.changePassword(this.password, this.token);
  }

}
