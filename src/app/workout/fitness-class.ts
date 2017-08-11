import { Language } from '../fitness-schedule/enums/language.enum';
import { Gym } from '../fitness-schedule/enums/gym.enum';
import { Day } from '../fitness-schedule/enums/day.enum';
import { ClassComment } from '../comment/class-comment';

export interface FitnessClass {
  id: string;
  startHour: number;
  startMinute: number;
  day: Day;
  duration: number;
  workoutId: string;
  type: string;
  gym: Gym;
  language: Language;
  comments?: ClassComment[];
}
