import { FitnessClass } from '../../interfaces/fitness-class';
export interface ScheduleChange {
  scheduleId: string;
  added: FitnessClass[];
  removed: FitnessClass[];
  timestamp: Date;
}
