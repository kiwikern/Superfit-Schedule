import { FitnessClass } from './fitness-class';
export interface ScheduleState {
  schedule: FitnessClass[];
  isLoading: boolean;
  error?: any;
}
