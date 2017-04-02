/**
 * Created by Kim on 02.04.2017.
 */
import { Injectable } from '@angular/core';
import { RootActions } from './root.actions';
import { parse } from '../parser/schedule.parser';
import { Observable } from 'rxjs';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RootEpics {
  constructor(private actions: RootActions) {
  }

  createEpics() {
    return action$ => action$
      .ofType(RootActions.LOAD_STARTED)
      .switchMap(action => this.loadSchedule()
        .map(scheduleJSON => this.actions.loadSucceded(scheduleJSON))
        .catch(error => of(this.actions.loadFailed(error)))
      );
  }

  private loadSchedule() {

    const data = `{
      "berlin-europa-center-cycle": {
        "wednesday": [
          {
            "time": "11:00",
            "course": "cycle"
          },
          {
            "time": "17:00",
            "course": "cycle"
          }
        ],
        "monday": [
          {
            "time": "09:00",
            "course": "rpm"
          }
        ]
      },
      "berlin-europa-center": {
        "monday": [
          {
            "time": "08:00",
            "course": "yoga"
          }
        ]
      }
    }`;
    return Observable.of(parse(data));
  }
}
