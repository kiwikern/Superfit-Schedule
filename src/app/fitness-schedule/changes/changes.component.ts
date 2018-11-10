import { AfterContentInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { FitnessClass } from '../../workout/fitness-class';
import { ScheduleParserService } from '../store/schedule/schedule-parser.service';
import { Observable, Subscription } from 'rxjs';
import { ScheduleChange } from '../store/changes/schedule-change.interface';
import { FilterState } from '../store/filter/filter-state';
import { MatDialog } from '@angular/material';
import { PushNotificationRequestDialogComponent } from '../push-notification-request-dialog/push-notification-request-dialog.component';
import { ShowPushnotificationsState } from '../store/settings/settings-state';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'sfs-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangesComponent implements OnInit, OnDestroy, AfterContentInit {

  @select(['changes', 'changes']) changes$: Observable<ScheduleChange[]>;
  @select(['settings', 'showPushNotifications']) showPushNotifications$: Observable<ShowPushnotificationsState>;
  @select() filter$: Observable<FilterState>;
  selectedTab = 0;
  filterClasses = true;
  changes = [];
  subscriptions: Subscription[] = [];

  constructor(private parseService: ScheduleParserService,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.subscriptions.push(this.changes$.subscribe(changes => {
      this.changes = changes.map(change => ({
        timestamp: change.timestamp,
        schedule: this.concatChanges(change.added, change.removed),
        added: change.added,
        removed: change.removed
      }));
    }));
  }

  ngAfterContentInit() {
    this.subscriptions.push(
      this.showPushNotifications$.pipe(
        filter(state => state === ShowPushnotificationsState.UNDECIDED || state === undefined)
        // TODO: setTimeout workaround, see https://github.com/angular/angular/issues/15634
      ).subscribe(() => setTimeout(
        () => this.matDialog.open(PushNotificationRequestDialogComponent, {autoFocus: false})
      ))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  concatChanges(added: FitnessClass[], removed: FitnessClass[]) {
    return this.parseService.getAllClassesByDay(added.concat(removed));
  }

}
