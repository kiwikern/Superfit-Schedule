import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/root-state.interface';
import { SyncActions } from '../sync.actions';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { SyncState } from '../sync-state.interface';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'sfs-sync-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @select() sync$: Observable<SyncState>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private actions: SyncActions,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  requestSync() {
    const ref = this.showSnackBar('Erneuter Versuch zu synchronisieren.');
    this.ngRedux.dispatch(this.actions.sync());
    const subscription = this.sync$.pipe(debounceTime(500))
      .subscribe(sync => {
        if (sync.hasError && !sync.isRequesting) {
          this.showSnackBar('Synchronisierung erneut fehlgeschlagen.');
        }
      });
    ref.afterDismissed().subscribe(() => subscription.unsubscribe());
  }

  showLoginRequired() {
    this.showSnackBar('Einloggen um Synchronisierung zu aktivieren.');
  }

  showSnackBar(message: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, 'OK', {duration: 5000});
  }

}
