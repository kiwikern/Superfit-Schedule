import { FitnessClassesPerDay } from './fitness-classes-per-day';
export interface ScheduleState {
  schedulePerDay: FitnessClassesPerDay[];
  isLoading: boolean;
  error?: any;
}
