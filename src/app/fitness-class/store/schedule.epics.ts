/**
 * Created by Kim on 02.04.2017.
 */
import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ScheduleActions } from './schedule.actions';
import { parse } from '../../parser/schedule.parser';
import { Http } from '@angular/http';

@Injectable()
export class ScheduleEpics {
  constructor(private actions: ScheduleActions,
              private http: Http) {
  }

  createEpics() {
    return action$ => action$
      .ofType(ScheduleActions.LOAD_STARTED)
      .switchMap(action => this.fetchSchedule()
        .map(scheduleJSON => this.actions.loadSucceded(parse(scheduleJSON.json())))
        .catch(error => of(this.actions.loadFailed(error)))
      );
  }

  private fetchSchedule() {
    const url = '/api/sfs/schedule';
    return this.http.get(url);
  }
}
