import { Pipe, PipeTransform } from '@angular/core';
import { FitnessClass } from '../interfaces/fitness-class';
import { FilterState } from '../interfaces/filter-state';

@Pipe({
  name: 'filterClasses',
  pure: false
})
export class FilterClassesPipe implements PipeTransform {

  transform(classes: FitnessClass[], filterState?: FilterState): FitnessClass[] {
    if (!filterState) {
      return classes;
    }
    let filteredClasses = classes;
    if (filterState.days) {
      filteredClasses = filteredClasses.filter(c => filterState.days.includes(c.day));
    }
    if (filterState.gyms) {
      filteredClasses = filteredClasses.filter(c => filterState.gyms.includes(c.gym));
    }
    if (filterState.workouts) {
      filteredClasses = filteredClasses.filter(c => filterState.workouts.includes(c.workoutId));
    }
    if (filterState.durations) {
      filteredClasses = filteredClasses.filter(c => filterState.durations.includes(c.duration));
    }
    if (filterState.languages) {
      filteredClasses = filteredClasses.filter(c => filterState.languages.includes(c.language));
    }
    if (filterState.minStartTime) {
      filteredClasses = filteredClasses.filter(c => filterState.minStartTime <= c.startTime);
    }
    if (filterState.maxStartTime) {
      filteredClasses = filteredClasses.filter(c => filterState.maxStartTime >= c.startTime);
    }

    return filteredClasses;
  }

}
