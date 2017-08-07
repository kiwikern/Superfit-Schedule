import { Day } from '../enums/day.enum';
import { FitnessClass } from '../../workout/fitness-class';
export interface FitnessClassesPerDay {
  day: Day;
  classes: FitnessClass[];
}
