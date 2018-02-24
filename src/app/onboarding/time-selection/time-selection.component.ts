import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../filter/filter.service';
import { select } from '@angular-redux/store';

@Component({
  selector: 'sfs-time-selection',
  templateUrl: './time-selection.component.html',
  styleUrls: ['./time-selection.component.css']
})
export class TimeSelectionComponent implements OnInit {

  @select() readonly filter$;

  constructor(public filterService: FilterService) { }

  ngOnInit() {
  }

}
