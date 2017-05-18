import { Component, Input, OnInit } from '@angular/core';
import { MappingService } from '../services/mapping.service';
import { NgRedux, select } from '@angular-redux/store';
import { FitnessClass } from '../interfaces/fitness-class';
import { Gym } from '../enums/gym.enum';
import { Day } from '../enums/day.enum';
import { IAppState } from '../../store/root.types';
import { FavoriteActions } from '../store/favorite.actions';
import * as _ from 'lodash';

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
  @Input()
  fitnessClass: FitnessClass;

  constructor(private mappingService: MappingService,
              private ngRedux: NgRedux<IAppState>,
              private actions: FavoriteActions) {
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

  private isInFavorites(workouts: FitnessClass[]): boolean {
    if (this.fitnessClass) {
      return workouts.findIndex((f) => _.isEqual(this.fitnessClass, f)) !== -1;
    } else {
      return false;
    }
  }

}
