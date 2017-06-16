import { Language } from '../enums/language.enum';
import { Gym } from '../enums/gym.enum';
import { Day } from '../enums/day.enum';
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
}
