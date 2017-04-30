import { Day } from '../enums/day.enum';
import { Gym } from '../enums/gym.enum';
import { Language } from '../enums/language.enum';
export interface FilterState {
  minStartTime?: Date;
  maxStartTime?: Date;
  days?: Day[];
  durations?: number[];
  gyms?: Gym[];
  workouts?: string[];
  languages?: Language[];
}
