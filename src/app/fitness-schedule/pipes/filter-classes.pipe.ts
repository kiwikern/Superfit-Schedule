import { Pipe, PipeTransform } from '@angular/core';
import { FitnessClass } from '../interfaces/fitness-class';
import { FilterState } from '../store/filter/filter-state';
import * as moment from 'moment-mini';
import { FitnessClassesPerDay } from '../interfaces/fitness-classes-per-day';
import { Day } from '../enums/day.enum';

@Pipe({
  name: 'filterClasses'
})
export class FilterClassesPipe implements PipeTransform {

  transform(schedulePerDay: FitnessClassesPerDay[], filterState?: FilterState): FitnessClassesPerDay[] {
    if (!filterState || !schedulePerDay) {
      return schedulePerDay;
    } else {
      return schedulePerDay.map(classesPerDay => {
        return {
          day: classesPerDay.day,
          classes: this.filterClasses(classesPerDay.classes, filterState)
        };
      }).filter(classesPerDay => classesPerDay.classes.length !== 0);
    }
  }

  private filterClasses(classes: FitnessClass[], filterState: FilterState): FitnessClass[] {
    const workouts = filterState.workouts || [];
    const teamTrainings = filterState.teamTrainings || [];
    const allWorkouts = workouts.concat(teamTrainings);
    return classes.filter(c =>
      (!filterState.days || filterState.days.includes(c.day)) &&
      (!filterState.gyms || filterState.gyms.includes(c.gym)) &&
      (allWorkouts.length === 0 || allWorkouts.includes(c.workoutId)) &&
      (!filterState.minDuration || filterState.minDuration <= c.duration) &&
      (!filterState.maxDuration || filterState.maxDuration >= c.duration) &&
      (!filterState.languages || filterState.languages.includes(c.language)) &&
      this.isAfterMinStartTime(filterState, c) && this.isBeforeMaxEndTime(filterState, c)
    );
  }

  private isAfterMinStartTime(filterState: FilterState, workout: FitnessClass) {
    const minStartTime = filterState.minStartTime;
    const ignoreFilter = !minStartTime || filterState.filterTimeOnlyOnWorkdays && this.isWeekend(workout.day);
    return ignoreFilter || minStartTime <= workout.startHour;
  }

  private isBeforeMaxEndTime(filterState: FilterState, workout: FitnessClass): boolean {
    const maxEndTime = filterState.maxEndTime;
    if (!maxEndTime || (filterState.filterTimeOnlyOnWorkdays && this.isWeekend(workout.day))) {
      return true;
    } else {
      const startMinutes = workout.startMinute;
      const duration = workout.duration;
      const endHour = moment().hour(workout.startHour).minutes(startMinutes + duration).hour();
      return (maxEndTime > endHour) || (maxEndTime === endHour && (startMinutes + duration) % 60 === 0);
    }
  }

  private isWeekend(day: Day): boolean {
    return day === Day.SATURDAY || day === Day.SUNDAY;
  }

}
