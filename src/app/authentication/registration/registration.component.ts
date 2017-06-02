import { Component, OnInit } from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Submit
  }

}
