import { Component, OnDestroy, OnInit } from '@angular/core';
import { Feedback } from '../feedback-interface';
import { Observable, Subscription } from 'rxjs';
import { select } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';
import { FeedbackActions } from '../store/feedback.actions';
import { AuthService } from '../../authentication/store/auth-service/auth.service';

@Component({
  selector: 'sfs-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.css']
})
export class FeedbackDetailComponent implements OnInit, OnDestroy {
  @select(['feedback', 'feedbackList']) feedbackList$: Observable<Feedback[]>;

  private subscription: Subscription;
  id: string;
  feedback: Feedback;
  text: string;

  constructor(private route: ActivatedRoute,
              private actions: FeedbackActions,
              private authService: AuthService) {
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

  isOwnResponse(userId) {
    const isResponseByAdmin = userId === 'sfs';
    const isAdmin = this.authService.isAdmin();
    return isResponseByAdmin === isAdmin;
  }

}
