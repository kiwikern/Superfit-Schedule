/**
 * Created by Kim on 02.04.2017.
 */
import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ScheduleActions } from './schedule.actions';
import { HttpClient } from '@angular/common/http';
import { ScheduleParserService } from './schedule-parser.service';

@Injectable()
export class ScheduleEpics {
  constructor(private actions: ScheduleActions,
              private parseService: ScheduleParserService,
              private http: HttpClient) {
  }

  createEpics() {
    return action$ => action$
      .ofType(ScheduleActions.SCHEDULE_LOAD_STARTED)
      .switchMap(action => this.fetchSchedule()
        .map(scheduleJSON => this.actions.loadSucceded(this.parseService.getAllClassesByDay(this.parseService.parse(scheduleJSON))))
        .catch(error => of(this.actions.loadFailed(error)))
      );
  }

  private fetchSchedule() {
    const url = '/api/sfs/schedule';
    return this.http.get(url);
  }
}
