import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'orderDays'
})
export class OrderDaysPipe implements PipeTransform {

  transform(classesPerDay: any[]): any {
    if (Array.isArray(classesPerDay)) {
      return classesPerDay.sort(this.compare);
    } else {
      return classesPerDay;
    }
  }

  private compare(classA: any, classB: any): number {
    const currentDay = moment().day() - 1;
    const dayA = (classA.day - currentDay + 7) % 7;
    const dayB = (classB.day - currentDay + 7) % 7;
    if (dayA < dayB) return -1;
    if (dayA > dayB) return 1;
    return 0;
  }


}
