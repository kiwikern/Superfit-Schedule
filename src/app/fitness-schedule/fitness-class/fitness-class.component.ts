import { Component, Input, OnInit } from '@angular/core';
import { MappingService } from '../services/mapping.service';
import { NgRedux, select } from '@angular-redux/store';
import { FitnessClass } from '../interfaces/fitness-class';
import { Gym } from '../enums/gym.enum';
import { Day } from '../enums/day.enum';
import { IAppState } from '../../store/root.types';
import { FavoriteActions } from '../store/favorites/favorite.actions';
import * as _ from 'lodash';
import { MdSnackBar, MdSnackBarRef, SimpleSnackBar } from '@angular/material';

@Component({
  selector: 'sfs-fitness-class',
  templateUrl: './fitness-class.component.html',
  styleUrls: ['./fitness-class.component.css']
})
export class FitnessClassComponent implements OnInit {
  @select(['filter', 'gyms']) gyms$;
  @select(['settings', 'showSingleStudio']) showSingleStudio$;
  @select(['settings', 'showDaysInClasses']) showDaysInClasses$;
  @select(['favorites', 'workouts']) favorites$;
  isFavorite = false;
  isOnlyOneGymSelected: boolean = false;
  @Input() fitnessClass: FitnessClass;
  @Input() wasRemoved: boolean = false;

  constructor(private mappingService: MappingService,
              private ngRedux: NgRedux<IAppState>,
              private actions: FavoriteActions,
              private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.gyms$.subscribe(gyms => this.isOnlyOneGymSelected = gyms && gyms.length === 1);
    this.favorites$.subscribe(workouts => this.isFavorite = this.isInFavorites(workouts));
  }

  getGymName(gym: Gym): string {
    return this.mappingService.getGymName(gym);
  }

  getClassName(fitnessClassId) {
    return this.mappingService.getClassName(fitnessClassId);
  }

  getClassColor(fitnessClassId) {
    return this.mappingService.getClassColor(fitnessClassId);
  }

  getDayName(day: Day) {
    return this.mappingService.getDayName(day);
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      const action = this.actions.addFavorite({workout: this.fitnessClass});
      this.ngRedux.dispatch(action);
    } else {
      const action = this.actions.removeFavorite({workout: this.fitnessClass});
      this.ngRedux.dispatch(action);
    }
  }

  showRemovedSnackBar() {
    const snackBar: MdSnackBarRef<SimpleSnackBar> = this.snackBar.open(
      'Kursplan enthält Favorit nicht mehr', 'Entferne Favorit', {duration: 5000});
    snackBar.onAction()
      .subscribe(this.toggleFavorite);
  }

  private isInFavorites(workouts: FitnessClass[]): boolean {
    if (this.fitnessClass) {
      return workouts.findIndex((f) => _.isEqual(this.fitnessClass, f)) !== -1;
    } else {
      return false;
    }
  }

}
