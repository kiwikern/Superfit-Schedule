/**
 * Created by Kim on 02.04.2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ScheduleEpics } from '../fitness-class/store/schedule.epics';
import { createEpicMiddleware } from 'redux-observable';

@Injectable()
export class RootEpics {
  constructor(private scheduleEpics: ScheduleEpics) {
  }

  createEpics() {
    return [
      createEpicMiddleware(this.scheduleEpics.createEpics())
    ];
  }
}
