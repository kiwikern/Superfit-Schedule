import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { FitnessClass } from '../interfaces/fitness-class';
import { ScheduleParserService } from '../store/schedule/schedule-parser.service';
import { Observable } from 'rxjs/Observable';
import { ScheduleChange } from '../store/changes/schedule-change.interface';
import { Subscription } from 'rxjs/Subscription';
import { FilterState } from '../store/filter/filter-state';

@Component({
  selector: 'sfs-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangesComponent implements OnInit, OnDestroy {

  @select(['changes', 'changes']) changes$: Observable<ScheduleChange[]>;
  @select() filter$: Observable<FilterState>;
  selectedTab = 0;
  filterClasses = true;
  changes = [];
  subscription: Subscription;

  constructor(private parseService: ScheduleParserService) {
  }

  ngOnInit() {
    this.subscription = this.changes$.subscribe(changes => {
      this.changes = changes.map(change => ({
        timestamp: change.timestamp,
        schedule: this.concatChanges(change.added, change.removed),
        added: change.added,
        removed: change.removed
      }));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  concatChanges(added: FitnessClass[], removed: FitnessClass[]) {
    return this.parseService.getAllClassesByDay(added.concat(removed));
  }

}
