import { Component, OnInit } from '@angular/core';
import { RootActions } from '../../store/root.actions';
import { IAppState } from '../../store/root.types';
import { NgRedux, select } from '@angular-redux/store';
import { MappingService } from '../services/mapping.service';
import { FilterState } from '../interfaces/filter-state';

@Component({
  selector: 'sfs-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  @select(['schedule', 'schedule']) readonly schedule$;
  @select() readonly filter$;
  @select(['settings', 'showTodayFirst']) showTodayFirst$;
  @select(['settings', 'daysLayout']) daysLayout$;
  showTodayFirst: boolean = false;
  filter: FilterState = {};
  hasFilter: boolean = false;

  constructor(ngRedux: NgRedux<IAppState>,
              action: RootActions,
              private mappingService: MappingService) {

    ngRedux.dispatch(action.loadSchedule());
    this.filter$.subscribe(f => this.filter = f);
    this.filter$.subscribe(f => this.hasFilter = Object.keys(f).length > 0);
    this.showTodayFirst$.subscribe(show => this.showTodayFirst = show);
  }

  ngOnInit() {
    let scrollbar = document.getElementById('second-scrollbar');
    let scrollbarContent = document.getElementById('second-scrollbar-content');
    let classList = document.getElementById('class-list');
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
