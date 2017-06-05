import { Component, Input, OnInit } from '@angular/core';
import { MappingService } from '../services/mapping.service';
import { FitnessClassesPerDay } from '../interfaces/fitness-classes-per-day';
import { FitnessClass } from '../interfaces/fitness-class';

@Component({
  selector: 'sfs-day-column',
  templateUrl: './day-column.component.html',
  styleUrls: ['./day-column.component.css']
})
export class DayColumnComponent implements OnInit {

  @Input() classesPerDay: FitnessClassesPerDay = {day: null, classes: []};
  @Input() removedFavorites = [];

  constructor(private mappingService: MappingService) {
  }

  ngOnInit() {
  }

  getDayName(day) {
    return this.mappingService.getDayName(day);
  }

  wasRemoved(fitnessClass: FitnessClass) {
    return this.removedFavorites.includes(fitnessClass);
  }

}
