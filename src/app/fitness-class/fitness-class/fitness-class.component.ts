import { Component, Input } from '@angular/core';
import { MappingService } from '../services/mapping.service';
import { select } from '@angular-redux/store';
import { FitnessClass } from '../interfaces/fitness-class';
import { Gym } from '../enums/gym.enum';
import { Day } from '../enums/day.enum';

@Component({
  selector: 'sfs-fitness-class',
  templateUrl: './fitness-class.component.html',
  styleUrls: ['./fitness-class.component.css']
})
export class FitnessClassComponent {

  @Input()
  showSingleStudio: boolean = true;
  @Input()
  showDaysInClasses: boolean = true;
  @Input()
  isOnlyOneGymSelected: boolean = false;
  @Input()
  fitnessClass: FitnessClass;

  constructor(private mappingService: MappingService) {
  }

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
