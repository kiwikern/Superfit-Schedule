import * as moment from 'moment-mini';
import { FitnessClass } from '../../interfaces/fitness-class';
import { Gym } from '../../enums/gym.enum';
import { Day } from '../../enums/day.enum';
import { Language } from '../../enums/language.enum';
import { Injectable } from '@angular/core';

@Injectable()
export class ScheduleParserService {

  private GymMapping = {
    'berlin-europa-center-cycle': Gym.EUROPACENTER,
    'berlin-europa-center': Gym.EUROPACENTER,
    'berlin-steglitz': Gym.STEGLITZ,
    'berlin-steglitz-women': Gym.STEGLITZ_WOMEN,
    'berlin-mitte': Gym.MITTE,
    'berlin-charlottenburg': Gym.CHARLOTTENBURG,
    'berlin-tegel': Gym.TEGEL,
    'brandenburg-potsdam': Gym.POTSDAM,
    'berlin-koepenick': Gym.KOEPENICK,
    'berlin-friedrichshain': Gym.FRIEDRICHSHAIN
  };

  private DayMapping = {
    'monday': Day.MONDAY,
    'tuesday': Day.TUESDAY,
    'wednesday': Day.WEDNESDAY,
    'thursday': Day.THURSDAY,
    'friday': Day.FRIDAY,
    'saturday': Day.SATURDAY,
    'sunday': Day.SUNDAY
  };

  parse(scheduleJSON: Object) {
    const classes: FitnessClass[] = scheduleJSON ? this.getClassesPerDay(scheduleJSON) : [];
    return this.getAllClassesByDay(classes);
  }

  private getClassesPerDay(scheduleJSON: any): FitnessClass[] {
    const classes: FitnessClass[] = [];
    for (const course of scheduleJSON) {
      const fitnessClass: FitnessClass = {
        id: course._id,
        startHour: moment(course.time + '', 'HH:mm').hour(),
        startMinute: moment(course.time + '', 'HH:mm').minute(),
        day: this.DayMapping[course.day],
        duration: this.getClassDuration(course.course, course.type),
        workoutId: this.getClassName(course.course, course.type),
        type: course.type,
        gym: this.GymMapping[course.studio],
        language: this.getClassLanguage(course.course)
      };
      classes.push(fitnessClass);
    }
    return classes;
  }


  public getAllClassesByDay(classes: FitnessClass[]) {
    const result = [];
    const days = Object.keys(Day)
      .filter(key => typeof Day[key] === 'string')
      .map(key => Number.parseInt(key));
    for (const day of days) {
      result.push({day: day, classes: classes.filter(c => c.day === day)});
    }
    return result;
  }


  private getClassLanguage(className: string) {
    if (className.endsWith('-e')) {
      return Language.ENGLISH;
    } else {
      return Language.GERMAN;
    }
  }


  private getClassDuration(className: string, type: string) {
    if (type === 'teamtraining') {
      if (className.includes('stretch')) {
        return 10;
      } else if (className.includes('circuit')) {
        return 15;
      } else if (className.includes('qx') || className.includes('skilletic')) {
        return 25;
      } else if (className.includes('functional') || className === 'trx') {
        return 30;
      } else {
        return 20;
      }
    }
    if (className.includes('yogaxp')) {
      return 60;
    } else if (className.includes('xp') || className.includes('lmi') || className.includes('sprint')) {
      return 30;
    } else if (className.includes('yoga')) {
      return 90;
    } else {
      return 60;
    }
  }


  private getClassName(className: string, type: string) {
    if (className === 'ruecken' && type === 'teamtraining') {
      return 'tsw';
    }
    if (className.endsWith('-e')) {
      return className.slice(0, -2);
    } else {
      return className;
    }
  }
}

