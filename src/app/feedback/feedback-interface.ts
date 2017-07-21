import { FeedbackResponse } from './response-interface';
export interface Feedback {
  id: string;
  text: string;
  date: Date;
  responses: FeedbackResponse[];
  satisfaction?: number;
  device?: string;
  os?: string;
  browser?: string;
}
