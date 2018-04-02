import {FeedbackResponse} from './response-interface';

export interface Feedback {
  id: string;
  text: string;
  date: Date;
  responses: FeedbackResponse[];
  userId?: string;
  satisfaction?: number;
  device?: string;
  os?: string;
  browser?: string;
  isRead?: boolean;
}
