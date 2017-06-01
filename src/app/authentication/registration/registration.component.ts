import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sfs-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  mailAddress: string;
  password: string;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Submit
  }

}
