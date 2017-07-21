import { Component, OnInit } from '@angular/core';
import { FeedbackActions } from '../store/feedback.actions';
import { MdDialogRef } from '@angular/material';

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

  constructor(private actions: FeedbackActions,
              private dialogRef: MdDialogRef<FeedbackFormComponent>) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const feedback = {text: this.text, device: this.device, os: this.os, browser: this.browser};
    this.dialogRef.close();
    this.actions.sendFeedback(feedback);
  }

}
