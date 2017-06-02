import { FitnessClassesPerDay } from '../../interfaces/fitness-classes-per-day';
export interface ScheduleState {
  schedulePerDay: FitnessClassesPerDay[];
  isLoading: boolean;
  error?: any;
}
