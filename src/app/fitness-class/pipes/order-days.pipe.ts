import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'orderDays'
})
export class OrderDaysPipe implements PipeTransform {

  transform(classesPerDay: any[], isEnabled?: boolean): any {
    if (Array.isArray(classesPerDay)) {
      if(isEnabled) {
        return classesPerDay.sort(this.compareTodayFirst);
      } else {
        return classesPerDay.sort(this.compareMondayFirst);
      }
    } else {
      return classesPerDay;
    }
  }

  private compareTodayFirst(classA: any, classB: any): number {
    const currentDay = moment().day() - 1;
    const dayA = (classA.day - currentDay + 7) % 7;
    const dayB = (classB.day - currentDay + 7) % 7;
    if (dayA < dayB) return -1;
    if (dayA > dayB) return 1;
    return 0;
  }

  private compareMondayFirst(classA: any, classB: any): number {
    if (classA.day < classB.day) return -1;
    if (classA.day > classB.day) return 1;
    return 0;
  }


}
