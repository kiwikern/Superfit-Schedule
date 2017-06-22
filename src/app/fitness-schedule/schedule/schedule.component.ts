import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { FilterState } from '../store/filter/filter-state';
import { FitnessClass } from '../interfaces/fitness-class';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sfs-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  @select(['settings', 'showTodayFirst']) showTodayFirst$;
  @select(['settings', 'daysLayout']) daysLayout$;
  showTodayFirst: boolean = false;
  @Input() filter: FilterState = {};
  @Input() showFavoriteButton = true;
  @Input() showSchedule: boolean = false;
  @Input() schedulePerDay: any[] = [];
  @Input() removedFavorites: FitnessClass[] = [];
  @Input() newClasses = [];

  private subscriptions: Subscription[] = [];

  ngOnInit() {
    setTimeout(this.createSecondScrollbar, 100);
    const sub = this.showTodayFirst$.subscribe(show => this.showTodayFirst = show);
    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
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
