import { Component, Input, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { FilterState } from '../store/filter/filter-state';
import { FitnessClassesPerDay } from '../interfaces/fitness-classes-per-day';

@Component({
  selector: 'sfs-filtered-schedule',
  templateUrl: './filtered-schedule.component.html',
  styleUrls: ['./filtered-schedule.component.css']
})
export class FilteredScheduleComponent implements OnInit {

  @Input() showFavoriteButton = true;

  @select(['schedule', 'schedulePerDay']) readonly schedulePerDay$: FitnessClassesPerDay[];
  @select() readonly filter$;
  @select(['changes', 'changes']) changes$;

  filter: FilterState = {};
  showSchedule: boolean = false;
  // TODO: remove after codelyzer fix
  private async: any;

  ngOnInit() {
    this.filter$.subscribe(f => this.filter = f);
    this.filter$.subscribe(f => this.showSchedule = f.hasOwnProperty('gyms') || f.hasOwnProperty('workouts'));
  }

}
