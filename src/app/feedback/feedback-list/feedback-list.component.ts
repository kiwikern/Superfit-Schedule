import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback-interface';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import { FeedbackActions } from '../store/feedback.actions';
import { FeedbackService } from '../store/feedback.service';

@Component({
  selector: 'sfs-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  @select(['feedback', 'feedbackList']) feedbackList$: Observable<Feedback[]>;

  constructor(private actions: FeedbackActions,
              private feedbackService: FeedbackService) {
  }

  ngOnInit() {
    this.actions.loadFeedback();
  }

  isUnread(feedback: Feedback) {
    return this.feedbackService.isUnread(feedback);
  }


}
