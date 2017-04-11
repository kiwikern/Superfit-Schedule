import { Pipe, PipeTransform } from '@angular/core';
import { IFitnessClass } from '../fitness-class.types';

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
    if (classA.day < classB.day) return -1;
    if (classA.day > classB.day) return 1;
    if (classA.startTime < classB.startTime) return -1;
    if (classA.startTime > classB.startTime) return 1;
    return 0;
  }

}
