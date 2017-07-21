import { Component, OnDestroy, OnInit } from '@angular/core';
import { Feedback } from '../feedback-interface';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';
import { FeedbackActions } from '../store/feedback.actions';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sfs-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.css']
})
export class FeedbackDetailComponent implements OnInit, OnDestroy {
  @select(['feedback', 'feedbackList']) feedbackList$: Observable<Feedback[]>;

  private feedback: Feedback;
  private id: string;
  private subscription: Subscription;
  private text: string;

  constructor(private route: ActivatedRoute,
              private actions: FeedbackActions) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.actions.markFeedbackRead(this.id);
      this.setFeedback();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  setFeedback() {
    this.subscription = this.feedbackList$.subscribe(feedbackList => {
      this.feedback = feedbackList.find(f => f.id === this.id);
    });
  }

  onSubmit() {
    const response = {feedbackId: this.id, text: this.text};
    this.actions.sendResponse(response);
  }

}
