import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MappingService } from '../../workout/mapping.service';
import { FitnessClassesPerDay } from '../interfaces/fitness-classes-per-day';
import { FitnessClass } from '../../workout/fitness-class';
import { select } from '@angular-redux/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'sfs-day-column',
  templateUrl: './day-column.component.html',
  styleUrls: ['./day-column.component.css']
})
export class DayColumnComponent implements OnInit, OnDestroy {

  @Input() classesPerDay: FitnessClassesPerDay = {day: null, classes: []};
  @Input() removedFavorites = [];
  @Input() showFavoriteButton = true;
  @Input() newClasses = [];
  @Input() hideSingleStudio = false;

  @select(['filter', 'gyms']) gyms$;
  @select(['settings', 'showSingleStudio']) showSingleStudio$;
  @select(['settings', 'showDaysInClasses']) showDaysInClasses$;
  @select(['settings', 'showWorkoutType']) showWorkoutType$;
  @select(['favorites', 'workouts']) favorites$: Observable<FitnessClass[]>;
  hideSingleStudio$: Observable<boolean>;
  favoriteIds: string[] = [];

  subscriptions: Subscription[] = [];

  constructor(private mappingService: MappingService) {
  }

  ngOnInit() {
    const sub = this.favorites$.subscribe(favs => this.favoriteIds = favs.map(f => f.id));
    this.hideSingleStudio$ = this.showSingleStudio$.map(option => option && this.hideSingleStudio);
    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  getDayName(day) {
    return this.mappingService.getDayName(day);
  }

  wasRemoved(fitnessClass: FitnessClass) {
    return this.removedFavorites.findIndex(f => f.id === fitnessClass.id) !== -1;
  }

  isNewClass(fitnessClass: FitnessClass) {
    return this.newClasses.findIndex(f => f.id === fitnessClass.id) !== -1;
  }

}
