import { Feedback } from '../feedback-interface';
import { FeedbackResponse } from '../response-interface';
export interface FeedbackPayload {
  feedback?: Feedback;
  feedbackList?: Feedback[];
  response?: FeedbackResponse;
  responses?: FeedbackResponse[];
  feedbackId?: string;
  error?: any;
}
