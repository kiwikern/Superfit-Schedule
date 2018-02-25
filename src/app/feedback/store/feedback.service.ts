import { Injectable } from '@angular/core';
import { AuthService } from '../../authentication/store/auth-service/auth.service';
import { Feedback } from '../feedback-interface';

@Injectable()
export class FeedbackService {

  constructor(private authService: AuthService) { }

  isUnread(feedback: Feedback) {
    const isAdmin = this.authService.isAdmin();
    const isUnreadFeedback = !feedback.isRead && isAdmin;
    const hasUnreadResponse = feedback.responses.filter(r => {
      return r && !r.isRead && (r.userId === 'sfs') !== isAdmin;
    }).length > 0;
    return isUnreadFeedback || hasUnreadResponse;
  }

}
