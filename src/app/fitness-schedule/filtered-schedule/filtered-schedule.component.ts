import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { FilterState } from '../interfaces/filter-state';

@Component({
  selector: 'sfs-filtered-schedule',
  templateUrl: './filtered-schedule.component.html',
  styleUrls: ['./filtered-schedule.component.css']
})
export class FilteredScheduleComponent implements OnInit {

  @select(['schedule', 'schedule']) readonly schedule$;
  @select() readonly filter$;

  filter: FilterState = {};
  showSchedule: boolean = false;

  ngOnInit() {
    this.filter$.subscribe(f => this.filter = f);
    this.filter$.subscribe(f => this.showSchedule = f.hasOwnProperty('gyms') || f.hasOwnProperty('workouts'));
  }

}
