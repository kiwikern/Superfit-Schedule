import { ScheduleChange } from './schedule-change.interface';
export interface ChangesState {
  changes: ScheduleChange[];
  isLoading: boolean;
  error?: any;
}
