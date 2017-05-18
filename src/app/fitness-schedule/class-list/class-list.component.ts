import { Component, Input, OnInit } from '@angular/core';
import { IAppState } from '../../store/root.types';
import { NgRedux, select } from '@angular-redux/store';
import { MappingService } from '../services/mapping.service';
import { FilterState } from '../interfaces/filter-state';
import { ScheduleActions } from '../store/schedule.actions';

@Component({
  selector: 'sfs-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  @select(['settings', 'showTodayFirst']) showTodayFirst$;
  @select(['settings', 'daysLayout']) daysLayout$;
  showTodayFirst: boolean = false;

  @Input() filter: FilterState = {};
  @Input() showSchedule: boolean = false;
  @Input() schedulePerDay: any[] = [];

  constructor(ngRedux: NgRedux<IAppState>,
              action: ScheduleActions,
              private mappingService: MappingService) {
    ngRedux.dispatch(action.loadSchedule());
  }

  ngOnInit() {
    setTimeout(this.createSecondScrollbar, 100);
    this.showTodayFirst$.subscribe(show => this.showTodayFirst = show);
  }

  private createSecondScrollbar() {
    const scrollbar = document.getElementById('second-scrollbar');
    const scrollbarContent = document.getElementById('second-scrollbar-content');
    const classList = document.getElementById('class-list');
    if (classList && scrollbar && scrollbarContent) {
      setTimeout(() => scrollbarContent.style.width = classList.scrollWidth + 'px', 100);
      classList.onscroll = () => scrollbar.scrollLeft = classList.scrollLeft;
      scrollbar.onscroll = () => classList.scrollLeft = scrollbar.scrollLeft;
    }
  }

  getDayName(day) {
    return this.mappingService.getDayName(day);
  }

}
