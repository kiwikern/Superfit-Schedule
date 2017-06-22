import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ChangesActions } from './changes.actions';
import { Http } from '@angular/http';
import { ScheduleParserService } from '../schedule/schedule-parser.service';

@Injectable()
export class ChangesEpics {
  constructor(private actions: ChangesActions,
              private parseService: ScheduleParserService,
              private http: Http) {
  }

  createEpics() {
    return action$ => action$
      .ofType(ChangesActions.CHANGE_LOAD_STARTED)
      .switchMap(action => this.fetchSchedule()
        .map(scheduleJSON => this.actions.loadSucceded(scheduleJSON.json().map(c => ({
          timestamp: c.timestamp,
          scheduleId: c.scheduleId,
          added: this.parseService.parse(c.added),
          removed: this.parseService.parse(c.removed)
        }))))
        .catch(error => of(this.actions.loadFailed(error)))
      );
  }

  private fetchSchedule() {
    const url = '/api/sfs/schedule/changes';
    return this.http.get(url);
  }
}
