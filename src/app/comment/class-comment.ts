import { Highlight } from './highlights.enum';

export interface ClassComment {
  workoutId: string;
  userId: string;
  userName: string;
  date: Date;
  text: string;
  instructors: string[];
  attendance?: number;
  highlights: Highlight[];
}
