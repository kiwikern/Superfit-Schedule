import { Day } from '../enums/day.enum';
import { FitnessClass } from './fitness-class';
export interface FitnessClassesPerDay {
  day: Day;
  classes: FitnessClass[];
}
