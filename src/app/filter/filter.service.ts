import { Injectable } from '@angular/core';
import { FilterPayload } from '../fitness-schedule/store/filter/filter-payload';
import { FilterActions } from '../fitness-schedule/store/filter/filter.actions';

@Injectable()
export class FilterService {

  constructor(private filterActions: FilterActions) { }

  addWorkoutFilter(value: any) {
    this.addFilter('workouts', value);
  }

  addTeamTrainingsFilter(value: any) {
    this.addFilter('teamTrainings', value);
  }

  addGymsFilter(value: any) {
    this.addFilter('gyms', value);
  }

  public addFilter(filterName: string, value: any) {
    const payload: FilterPayload = {filterName: filterName, filterValue: value};
    if (value && !(Array.isArray(value) && value.length === 0)) {
      this.filterActions.addFilter(payload);
    } else {
      this.filterActions.removeFilter(payload);
    }
  }

}
