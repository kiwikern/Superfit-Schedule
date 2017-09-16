import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MappingService } from '../../workout/mapping.service';
import { FitnessClassesPerDay } from '../interfaces/fitness-classes-per-day';
import { FitnessClass } from '../../workout/fitness-class';
import { select } from '@angular-redux/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'sfs-day-column',
  templateUrl: './day-column.component.html',
  styleUrls: ['./day-column.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('scheduleAnimation', [
      transition(':enter', [
        query('sfs-fitness-class, h2', [
          style({transform: 'translateY(-100px)', opacity: 0}),
          stagger('100ms', [
            animate('0.2s cubic-bezier(.35,0,.25,1)', style('*'))
          ])
        ])
      ])
    ])
  ]
})
export class DayColumnComponent implements OnInit, OnDestroy {

  @Input() classesPerDay: FitnessClassesPerDay = {day: null, classes: []};
  @Input() removedFavorites = [];
  @Input() showFavoriteButton = true;
  @Input() newClasses = [];

  @select(['settings', 'showStudio']) showStudio$;
  @select(['settings', 'showDaysInClasses']) showDaysInClasses$;
  @select(['settings', 'showWorkoutType']) showWorkoutType$;
  @select(['favorites', 'workouts']) favorites$: Observable<FitnessClass[]>;
  favoriteIds: string[] = [];

  subscriptions: Subscription[] = [];

  constructor(private mappingService: MappingService) {
  }

  ngOnInit() {
    const sub = this.favorites$.subscribe(favs => this.favoriteIds = favs.map(f => f.id));
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

  trackById(index: number, fitnessClass: FitnessClass) {
    return fitnessClass.id;
  }

}
