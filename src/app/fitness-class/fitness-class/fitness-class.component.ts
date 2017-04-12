import { Component, Input } from '@angular/core';
import { IFitnessClass, Gym, Day } from '../fitness-class.types';
import { MappingService } from '../services/mapping.service';

@Component({
  selector: 'sfs-fitness-class',
  templateUrl: './fitness-class.component.html',
  styleUrls: ['./fitness-class.component.css']
})
export class FitnessClassComponent {

  constructor(private mappingService: MappingService) {
  }

  @Input()
  fitnessClass: IFitnessClass;

  getGymName(gym: Gym): string {
    return this.mappingService.getGymName(gym);
  }

  getClassName(fitnessClassId) {
    return this.mappingService.getClassName(fitnessClassId);
  }

  getClassColor(fitnessClassId) {
    return this.mappingService.getClassColor(fitnessClassId);
  }

  getDayName(day: Day) {
    return this.mappingService.getDayName(day);
  }

}
