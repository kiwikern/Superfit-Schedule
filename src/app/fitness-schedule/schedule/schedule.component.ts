import { Component, Input, OnInit } from '@angular/core';
import { IAppState } from '../../store/root.types';
import { NgRedux, select } from '@angular-redux/store';
import { FilterState } from '../interfaces/filter-state';
import { ScheduleActions } from '../store/schedule.actions';

@Component({
  selector: 'sfs-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  @select(['settings', 'showTodayFirst']) showTodayFirst$;
  @select(['settings', 'daysLayout']) daysLayout$;
  showTodayFirst: boolean = false;

  @Input() filter: FilterState = {};
  @Input() showSchedule: boolean = false;
  @Input() schedulePerDay: any[] = [];

  constructor(ngRedux: NgRedux<IAppState>,
              action: ScheduleActions) {
    ngRedux.dispatch(action.loadSchedule());
  }

  ngOnInit() {
    setTimeout(this.createSecondScrollbar, 100);
    this.showTodayFirst$.subscribe(show => this.showTodayFirst = show);
  }

  private createSecondScrollbar() {
    const scrollbar = document.getElementById('second-scrollbar');
    const scrollbarContent = document.getElementById('second-scrollbar-content');
    const classList = document.getElementById('schedule');
    if (classList && scrollbar && scrollbarContent) {
      setTimeout(() => scrollbarContent.style.width = classList.scrollWidth + 'px', 100);
      classList.onscroll = () => scrollbar.scrollLeft = classList.scrollLeft;
      scrollbar.onscroll = () => classList.scrollLeft = scrollbar.scrollLeft;
    }
  }

}
