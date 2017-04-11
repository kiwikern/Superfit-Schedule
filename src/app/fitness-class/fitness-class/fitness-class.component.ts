import { Component, Input } from '@angular/core';
import { IFitnessClass, fitnessClassMapping, Gym } from '../fitness-class.types';

@Component({
  selector: 'sfs-fitness-class',
  templateUrl: './fitness-class.component.html',
  styleUrls: ['./fitness-class.component.css']
})
export class FitnessClassComponent {

  @Input()
  fitnessClass: IFitnessClass;

  getGymName(gym: Gym): string {
    switch(gym) {
      case Gym.EUROPACENTER: return 'Europacenter';
      case Gym.FRIEDRICHSHAIN: return 'Friedrichshain';
      case Gym.KOEPENIK: return 'Köpenik';
      case Gym.STEGLITZ: return 'Steglitz';
      case Gym.CHARLOTTENBURG: return 'Charlottenburg';
      case Gym.POTSDAM: return 'Potsdam';
      case Gym.TEGEL: return 'Tegel';
      case Gym.MITTE: return 'Mitte';
    }
    return 'Translation missing for gym: ' + gym;
  }

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
