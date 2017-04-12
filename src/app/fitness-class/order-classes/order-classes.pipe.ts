import { Pipe, PipeTransform } from '@angular/core';
import { IFitnessClass } from '../fitness-class.types';
import * as moment from 'moment';

@Pipe({
  name: 'orderClasses'
})
export class OrderClassesPipe implements PipeTransform {

  transform(classes: IFitnessClass[]): IFitnessClass[] {
    if (Array.isArray(classes)) {
      return classes.sort(this.compare);
    } else {
      return classes;
    }
  }

  private compare(classA: IFitnessClass, classB: IFitnessClass): number {
    const currentDay = moment().day() - 1;
    const dayA = (classA.day - currentDay + 7) % 7;
    const dayB = (classB.day - currentDay + 7) % 7;
    if (dayA < dayB) return -1;
    if (dayA > dayB) return 1;
    if (classA.startTime < classB.startTime) return -1;
    if (classA.startTime > classB.startTime) return 1;
    return 0;
  }

}
