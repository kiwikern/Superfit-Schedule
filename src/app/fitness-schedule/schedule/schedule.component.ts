import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { FilterState } from '../store/filter/filter-state';
import { FitnessClass } from '../../workout/fitness-class';
import { Subscription } from 'rxjs';
import { FitnessClassesPerDay } from '../interfaces/fitness-classes-per-day';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'sfs-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    const sub = this.showTodayFirst$.subscribe(show => this.showTodayFirst = show);
    this.subscriptions.push(sub);
    if (this.filter && this.filter.gyms) {
      if (this.filter.gyms.includes(9)) {
        // TODO: Remove setTimeout workaround
        return setTimeout(() =>
          this.snackBar.open(
            'Kursplan für Neukölln mixed ist wegen fehlender Zugriffsrechte leider nicht verfügbar. ' +
            'Um diese Meldung nicht mehr anzuzeigen, entferne Neukölln aus deiner Kurswahl.',
            'OK', {duration: 10000}));
      }
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  trackByIds(index: number, classesPerDay: FitnessClassesPerDay) {
    return classesPerDay.classes.map(f => f.id)
      .reduce((id1, id2) => id1 + id2, '');
  }

}
