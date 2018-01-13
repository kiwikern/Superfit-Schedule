import { Injectable, NgZone } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Logger } from '../common/logger.service';
import { MatSnackBar } from '@angular/material';
import { Angulartics2 } from 'angulartics2';
import { interval } from 'rxjs/observable/interval';


/**
 * SwUpdatesService
 *
 * @description
 * 1. Checks for available ServiceWorker updates once instantiated.
 * 2. As long as there is no update available, re-checks every 6 hours.
 * 3. As soon as an update is detected, it activates the update and notifies interested parties.
 * 4. It continues to check for available updates.
 *
 * @property
 * `updateActivated` {Observable<string>} - Emit the version hash whenever an update is activated.
 */
@Injectable()
export class SwUpdatesService {
  private readonly CHECK_INTERVAL = 1000 * 60 * 60 * 6;   // 6 hours

  constructor(private logger: Logger,
              private updates: SwUpdate,
              private angulartics: Angulartics2,
              ngZone: NgZone,
              private snackBar: MatSnackBar) {
    ngZone.runOutsideAngular(() => {
      interval(this.CHECK_INTERVAL).subscribe(() => ngZone.run(() => updates.checkForUpdate()));
    });

    this.updates.available.subscribe(event => {
      this.log(`Update available: ${event.current} -> ${event.available}`);
      this.angulartics.eventTrack.next({
        action: 'updateAvailable',
        properties: {current: event.current, available: event.available}
      });
      this.showReloadSnackBar();
    });

    this.updates.activated.subscribe(event => {
      this.log(`Update activated: ${event.previous} -> ${event.current}`);
      this.angulartics.eventTrack.next({
        action: 'updateActivated',
        properties: {current: event.current, previous: event.previous}
      });
    });
  }

  private log(message: string) {
    const timestamp = (new Date).toISOString();
    this.logger.log(`[SwUpdates - ${timestamp}]: ${message}`);
  }

  private showReloadSnackBar() {
    return this.snackBar.open('Neues Update installiert.', 'Aktualiseren', {duration: 10000})
      .onAction().subscribe(() => this.reloadPage());
  }

  private reloadPage() {
    const location = window.location;
    if (location && location.reload) {
      location.reload();
    }
  }
}
