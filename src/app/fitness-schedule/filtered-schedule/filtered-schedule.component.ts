import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { FilterState } from '../store/filter/filter-state';
import { FitnessClassesPerDay } from '../interfaces/fitness-classes-per-day';

@Component({
  selector: 'sfs-filtered-schedule',
  templateUrl: './filtered-schedule.component.html',
  styleUrls: ['./filtered-schedule.component.css']
})
export class FilteredScheduleComponent implements OnInit {

  @select(['schedule', 'schedulePerDay']) readonly schedulePerDay$: FitnessClassesPerDay[];
  @select() readonly filter$;

  filter: FilterState = {};
  showSchedule: boolean = false;

  ngOnInit() {
    this.filter$.subscribe(f => this.filter = f);
    this.filter$.subscribe(f => this.showSchedule = f.hasOwnProperty('gyms') || f.hasOwnProperty('workouts'));
  }

}
