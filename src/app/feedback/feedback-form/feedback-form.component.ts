import { Component, OnInit } from '@angular/core';
import { FeedbackActions } from '../store/feedback.actions';

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
  overallRating: number;
  performanceRating: number;

  constructor(private actions: FeedbackActions) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const feedback = {text: this.text, device: this.device, os: this.os, browser: this.browser};
    this.actions.sendFeedback(feedback);
  }

}
