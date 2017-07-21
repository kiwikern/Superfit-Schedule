import { Feedback } from '../feedback-interface';
import { FeedbackResponse } from '../response-interface';
export interface FeedbackState {
  feedbackList: Feedback[];
  responses: FeedbackResponse[];
  isLoading: boolean;
  isSending: boolean;
  hasError: boolean;
}
