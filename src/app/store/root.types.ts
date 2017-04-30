import { ScheduleState } from '../fitness-class/interfaces/schedule-state';
import { FilterState } from '../fitness-class/interfaces/filter-state';
/**
 * Created by Kim on 02.04.2017.
 */
export interface IAppState {
  schedule?: ScheduleState;
  classesFilter?: FilterState;
}
