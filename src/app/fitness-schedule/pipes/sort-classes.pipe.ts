import { Pipe, PipeTransform } from '@angular/core';
import { FitnessClass } from '../../workout/fitness-class';

@Pipe({
  name: 'sortClasses'
})
export class SortClassesPipe implements PipeTransform {

  transform(classes: FitnessClass[]): FitnessClass[] {
    if (Array.isArray(classes)) {
      return classes.sort(this.compare);
    } else {
      return classes;
    }
  }

  private compare(classA: FitnessClass, classB: FitnessClass): number {
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
