import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { ScheduleParserService } from '../services/schedule-parser.service';
import { FitnessClass } from '../interfaces/fitness-class';
import { FitnessClassesPerDay } from '../interfaces/fitness-classes-per-day';
import * as _ from 'lodash';
import { MdSnackBar } from '@angular/material';

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

  constructor(private parseService: ScheduleParserService,
              private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.favorites$.subscribe((favs) => this.hasFavorites = favs && favs.length > 0);
    this.favorites$.subscribe((favs) => this.favoritesPerDay = this.parseService.getAllClassesByDay(favs));
    this.checkFavoritesAvailability();
  }

  private checkFavoritesAvailability() {
    const combined = Observable.combineLatest(this.favorites$, this.schedulePerDay$, (fav, sched) => ({fav, sched}))
      .first();
    combined.subscribe(params => {
      this.removedFavorites = this.findFavoritesNotInSchedule(params.fav, params.sched);
      this.notifyAboutRemovedFavorites();
    });
  }

  private findFavoritesNotInSchedule(favorites: FitnessClass[], schedulePerDay: FitnessClassesPerDay[]): FitnessClass[] {
    const removedFavorites = [];
    const schedule = schedulePerDay
      .map(day => day.classes)
      .reduce((prev, curr) => prev.concat(curr), []);
    favorites.forEach(fav => {
      if (schedule.findIndex(workout => _.isEqual(fav, workout)) === -1) {
        removedFavorites.push(fav);
      }
    });
    return removedFavorites;
  }

  private notifyAboutRemovedFavorites() {
    if (this.removedFavorites.length > 0) {
      this.showRemovedSnackBar();
    }
  }

  private showRemovedSnackBar() {
    this.snackBar.open(
      'Kursplan enthält einen deiner Favoriten nicht mehr', '', {duration: 5000});
  }
}
