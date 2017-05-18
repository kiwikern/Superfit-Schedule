import { Component, Input, OnInit } from '@angular/core';
import { MappingService } from '../services/mapping.service';
import { FitnessClassesPerDay } from '../interfaces/fitness-classes-per-day';
import { FitnessClass } from '../interfaces/fitness-class';
import { FilterClassesService } from '../services/filter-classes.service';
import { SortClassesService } from '../services/sort-classes.service';
import { FilterState } from '../interfaces/filter-state';

@Component({
  selector: 'sfs-day-column',
  templateUrl: './day-column.component.html',
  styleUrls: ['./day-column.component.css']
})
export class DayColumnComponent implements OnInit {

  @Input() classesPerDay: FitnessClassesPerDay = {day: null, classes: []};
  @Input() filter: FilterState = {};
  filteredClasses: FitnessClass[] = [];

  constructor(private mappingService: MappingService,
              private filterService: FilterClassesService,
              private orderService: SortClassesService) {
  }

  ngOnInit() {
    this.filteredClasses = [this.classesPerDay.classes]
      .map(classes => this.filterService.filter(classes, this.filter))
      .map(classes => this.orderService.sort(classes))[0];
  }

  getDayName(day) {
    return this.mappingService.getDayName(day);
  }

}
