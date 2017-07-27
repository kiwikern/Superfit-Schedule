import { Highlight } from '../enums/highlights.enum';

export interface ClassComment {
  classId: string;
  userId: string;
  userName: string;
  date: Date;
  text: string;
  instructors: string[];
  attendance: number;
  highlights: Highlight[];
}
