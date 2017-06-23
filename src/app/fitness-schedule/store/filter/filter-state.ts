import { Day } from '../../enums/day.enum';
import { Gym } from '../../enums/gym.enum';
import { Language } from '../../enums/language.enum';
export interface FilterState {
  minStartTime?: number;
  maxEndTime?: number;
  filterTimeOnlyOnWorkdays?: boolean;
  days?: Day[];
  durations?: number[];
  gyms?: Gym[];
  workouts?: string[];
  teamTrainings?: string[];
  languages?: Language[];
}
