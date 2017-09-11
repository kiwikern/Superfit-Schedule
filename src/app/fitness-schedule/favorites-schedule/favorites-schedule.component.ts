import { Component, OnDestroy, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { ScheduleParserService } from '../store/schedule/schedule-parser.service';
import { FitnessClass } from '../../workout/fitness-class';
import { FitnessClassesPerDay } from '../interfaces/fitness-classes-per-day';
import { MdSnackBar } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sfs-favorites-schedule',
  templateUrl: './favorites-schedule.component.html',
  styleUrls: ['./favorites-schedule.component.css']
})
export class FavoritesScheduleComponent implements OnInit, OnDestroy {

  @select(['favorites', 'workouts']) favorites$: Observable<FitnessClass[]>;
  @select(['schedule', 'schedulePerDay']) schedulePerDay$: Observable<FitnessClassesPerDay[]>;
  favoritesPerDay = [];
  removedFavorites: FitnessClass[] = [];
  hasFavorites: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(private parseService: ScheduleParserService,
              private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    const sub1 = this.favorites$.subscribe((favs) => this.hasFavorites = favs && favs.length > 0);
    const sub2 = this.favorites$.subscribe((favs) => this.favoritesPerDay = this.parseService.getAllClassesByDay(favs));
    this.checkFavoritesAvailability();
    this.subscriptions.concat([sub1, sub2]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
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
      if (schedule.findIndex(workout => fav.id === workout.id) === -1) {
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
      'Kursplan enthält einen deiner Favoriten nicht mehr', 'OK', {duration: 5000});
  }
}
