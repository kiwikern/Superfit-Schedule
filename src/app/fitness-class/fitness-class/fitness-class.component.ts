import { Component, Input } from '@angular/core';
import { IFitnessClass, fitnessClassMapping } from '../fitness-class.types';

@Component({
  selector: 'sfs-fitness-class',
  templateUrl: './fitness-class.component.html',
  styleUrls: ['./fitness-class.component.css']
})
export class FitnessClassComponent {

  @Input()
  fitnessClass: IFitnessClass;

  getClassName(fitnessClassId) {
    if (fitnessClassMapping.hasOwnProperty(fitnessClassId)) {
      return fitnessClassMapping[fitnessClassId].name;
    } else {
      return fitnessClassId;
    }
  }

  getClassColor(fitnessClassId) {
    if (fitnessClassMapping.hasOwnProperty(fitnessClassId)) {
      return fitnessClassMapping[fitnessClassId].color;
    } else {
      return '#FFFFFF';
    }
  }

}
