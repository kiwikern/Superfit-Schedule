import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { ChangesActions } from './changes.actions';
import { ScheduleParserService } from '../schedule/schedule-parser.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

@Injectable()
export class ChangesEpics {
  constructor(private actions: ChangesActions,
              private parseService: ScheduleParserService,
              private http: HttpClient) {
  }

  epics = action$ => action$
    .pipe(
      ofType(ChangesActions.CHANGE_LOAD_STARTED),
      switchMap(action => this.fetchSchedule()
        .pipe(
          map((scheduleJSON: any[]) => this.actions.loadSucceded(scheduleJSON.map(c => ({
            timestamp: c.timestamp,
            scheduleId: c.scheduleId,
            added: this.parseService.parse(c.added),
            removed: this.parseService.parse(c.removed)
          })))),
          catchError(error => of(this.actions.loadFailed(error)))
        )));

  private fetchSchedule() {
    const url = '/api/sfs/schedule/changes';
    return <any>this.http.get(url);
  }
}
