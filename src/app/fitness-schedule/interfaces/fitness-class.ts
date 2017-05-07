import { Language } from '../enums/language.enum';
import { Gym } from '../enums/gym.enum';
import { Day } from '../enums/day.enum';
export interface FitnessClass {
  startTime: Date;
  day: Day;
  duration: number;
  workoutId: string;
  gym: Gym;
  language: Language;
}
