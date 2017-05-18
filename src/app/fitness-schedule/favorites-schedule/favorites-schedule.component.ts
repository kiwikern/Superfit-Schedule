import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { ScheduleParserService } from '../services/schedule-parser.service';
import { FitnessClass } from '../interfaces/fitness-class';
import { FitnessClassesPerDay } from '../interfaces/fitness-classes-per-day';
import * as _ from 'lodash';

@Component({
  selector: 'sfs-favorites-schedule',
  templateUrl: './favorites-schedule.component.html',
  styleUrls: ['./favorites-schedule.component.css']
})
export class FavoritesScheduleComponent implements OnInit {

  @select(['favorites', 'workouts']) favorites$: Observable<FitnessClass[]>;
  @select(['schedule', 'schedulePerDay']) schedulePerDay$: Observable<FitnessClassesPerDay[]>;
  favoritesPerDay = [];
  removedFavorites: FitnessClass[] = [];
  hasFavorites: boolean = false;

  constructor(private parseService: ScheduleParserService) {
  }

  ngOnInit() {
    this.favorites$.subscribe((favs) => this.hasFavorites = favs && favs.length > 0);
    this.favorites$.subscribe((favs) => this.favoritesPerDay = this.parseService.getAllClassesByDay(favs));
    const combined = Observable.combineLatest(this.favorites$, this.schedulePerDay$,
      (fav, sched) => this.removedFavorites = this.findFavoritesNotInSchedule(fav, sched));
    combined.subscribe();
  }

  private findFavoritesNotInSchedule(favorites: FitnessClass[], schedulePerDay: any[]): FitnessClass[] {
    const removedFavorites = [];
    const schedule = schedulePerDay
      .map(day => day.classes)
      .reduce((prev, curr) => prev.concat(curr));
    favorites.forEach(fav => {
      if (schedule.findIndex(workout => _.isEqual(fav, workout)) === -1) {
        removedFavorites.push(fav);
      }
    });
    return removedFavorites;
  }
}
