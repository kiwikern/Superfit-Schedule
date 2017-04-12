import { Component, OnInit } from '@angular/core';
import { MappingService } from '../services/mapping.service';

@Component({
  selector: 'sfs-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  allClasses = this.mappingService.getAllClasses();
  selectedClasses = [];
  minStartTime = 30;
  maxStartTime = 90;

  constructor(private mappingService: MappingService) { }

  getClassName(fitnessClassId: string): string {
    return this.mappingService.getClassName(fitnessClassId);
  }

  ngOnInit() {
  }



}
