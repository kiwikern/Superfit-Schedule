import { ChangeDetectionStrategy, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { MappingService } from '../mapping.service';
import { NgRedux } from '@angular-redux/store';
import { FitnessClass } from '../fitness-class';
import { IAppState } from '../../store/root-state.interface';
import { FavoriteActions } from '../../fitness-schedule/store/favorites/favorite.actions';
import { MdSnackBar, MdSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sfs-fitness-class',
  templateUrl: './fitness-class.component.html',
  styleUrls: ['./fitness-class.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FitnessClassComponent implements OnInit, OnDestroy {
  @Input() showStudio = true;
  @Input() showDaysInClasses = true;
  @Input() showWorkoutType = false;
  @Input() fitnessClass: FitnessClass;
  @Input() wasRemoved: boolean = false;
  @Input() isFavorite = false;
  @Input() showFavoriteButton = true;
  @Input() isNew = false;
  @HostBinding('attr.id') id;
  subscriptions: Subscription[] = [];

  constructor(private mappingService: MappingService,
              private ngRedux: NgRedux<IAppState>,
              private actions: FavoriteActions,
              private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.id = this.fitnessClass.id;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  getGymName(): string {
    return this.mappingService.getGymName(this.fitnessClass.gym);
  }

  getClassName() {
    return this.mappingService.getClassName(this.fitnessClass.workoutId);
  }

  getClassColor() {
    return this.mappingService.getClassColor(this.fitnessClass.workoutId);
  }

  getDayName() {
    return this.mappingService.getDayName(this.fitnessClass.day);
  }

  getWorkoutType() {
    return this.mappingService.getWorkoutType(this.fitnessClass.type);
  }

  toggleFavorite() {
    if (!this.isFavorite) {
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
    const sub = snackBar.onAction()
      .subscribe(() => this.toggleFavorite());
    this.subscriptions.push(sub);
  }

}
