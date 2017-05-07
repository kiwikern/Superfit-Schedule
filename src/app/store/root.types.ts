import { ScheduleState } from '../fitness-schedule/interfaces/schedule-state';
import { FilterState } from '../fitness-schedule/interfaces/filter-state';
/**
 * Created by Kim on 02.04.2017.
 */
export interface IAppState {
  schedule?: ScheduleState;
  classesFilter?: FilterState;
}
