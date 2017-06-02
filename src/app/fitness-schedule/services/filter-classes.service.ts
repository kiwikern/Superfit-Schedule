import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { FitnessClass } from '../interfaces/fitness-class';
import { FilterState } from '../store/filter/filter-state';
import * as moment from 'moment';

@Injectable()
export class FilterClassesService {

  filter(classes: FitnessClass[], filterState?: FilterState): FitnessClass[] {
    if (!filterState || !classes) {
      return classes;
    } else {
      return classes.filter(c =>
        (!filterState.days || filterState.days.includes(c.day)) &&
        (!filterState.gyms || filterState.gyms.includes(c.gym)) &&
        (!filterState.workouts || filterState.workouts.includes(c.workoutId)) &&
        (!filterState.durations || filterState.durations.includes(c.duration)) &&
        (!filterState.languages || filterState.languages.includes(c.language)) &&
        (!filterState.minStartTime || filterState.minStartTime <= c.startHour) &&
        this.isBeforeMaxEndTime(filterState.maxEndTime, c)
      );
    }
  }

  private isBeforeMaxEndTime(maxEndTime: number, workout: FitnessClass): boolean {
    if (!maxEndTime) {
      return true;
    } else {
      const startMinutes = workout.startMinute;
      const duration = workout.duration;
      const endHour = moment().hour(workout.startHour).minutes(startMinutes + duration).hour();
      return (maxEndTime > endHour) || (maxEndTime === endHour && startMinutes === 0);
    }
  }

}
