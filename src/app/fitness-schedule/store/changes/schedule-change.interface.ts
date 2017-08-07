import { FitnessClass } from '../../../workout/fitness-class';
export interface ScheduleChange {
  scheduleId: string;
  added: FitnessClass[];
  removed: FitnessClass[];
  timestamp: Date;
}
