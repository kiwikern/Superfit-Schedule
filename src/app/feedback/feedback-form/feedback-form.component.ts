import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sfs-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  text: string;
  device: string;
  os: string;
  browser: string;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    const payload = {text: this.text, device: this.device, os: this.os, browser: this.browser};
  }

}
