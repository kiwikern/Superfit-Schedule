import { Pipe, PipeTransform } from '@angular/core';
import { IFitnessClass, IFilterState } from '../fitness-class.types';

@Pipe({
  name: 'filterClasses',
  pure: false
})
export class FilterClassesPipe implements PipeTransform {

  transform(classes: IFitnessClass[], filterState?: IFilterState): IFitnessClass[] {
    if (!filterState) {
      return classes;
    }
    let filteredClasses = classes;
    if (filterState.days) {
      filteredClasses = filteredClasses.filter((c) => filterState.days.includes(c.day));
    }
    if (filterState.gyms) {
      filteredClasses = filteredClasses.filter(c => filterState.gyms.includes(c.gym));
    }

    return filteredClasses;
  }

}
