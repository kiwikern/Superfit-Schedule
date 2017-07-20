import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';
import { Feedback } from '../feedback-interface';

@Component({
  selector: 'sfs-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  feedbackList: Feedback[] = [
    {text: 'Hallo, ich finde, du solltest deine App schließen. Sie ist kacke. Tschüss', id: '', date: new Date()},
    {text: 'App schließen. Sie ist kacke. Tschüss', id: '', date: new Date()},
    {text: 'Wo finde ich bei SuperFit den Ausgang?', id: '', date: new Date()}
  ];

  constructor(private dialog: MdDialog) {
  }

  ngOnInit() {
  }

  openFeedbackForm() {
    this.dialog.open(FeedbackFormComponent);
  }

}
