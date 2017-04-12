import { Component, OnInit } from '@angular/core';
import { fitnessClassMapping } from '../fitness-class.types';

@Component({
  selector: 'sfs-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  allClasses = Object.keys(fitnessClassMapping);
  classMapping = fitnessClassMapping;
  selectedClasses = [];
  minStartTime = 30;
  maxStartTime = 90;

  constructor() { }

  ngOnInit() {
  }



}
