import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { FitnessClass } from '../interfaces/fitness-class';

@Pipe({
  name: 'orderClasses'
})
export class OrderClassesPipe implements PipeTransform {

  transform(classes: FitnessClass[]): FitnessClass[] {
    if (Array.isArray(classes)) {
      return classes.sort(this.compare);
    } else {
      return classes;
    }
  }

  private compare(classA: FitnessClass, classB: FitnessClass): number {
    const currentDay = moment().day() - 1;
    const dayA = (classA.day - currentDay + 7) % 7;
    const dayB = (classB.day - currentDay + 7) % 7;
    if (dayA < dayB) {
      return -1;
    }
    if (dayA > dayB) {
      return 1;
    }
    if (classA.startHour < classB.startHour) {
      return -1;
    }
    if (classA.startHour > classB.startHour) {
      return 1;
    }
    if (classA.startMinute < classB.startMinute) {
      return -1;
    }
    if (classA.startMinute > classB.startMinute) {
      return 1;
    }
    return 0;
  }

}
