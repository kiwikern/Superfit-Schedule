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
      },
      {
        "time": "18:00",
        "course": "rpm"
      },
      {
        "time": "19:30",
        "course": "cycle"
      },
      {
        "time": "21:00",
        "course": "cycle"
      }
    ],
    "monday": [
      {
        "time": "09:00",
        "course": "rpm"
      },
      {
        "time": "17:00",
        "course": "rpm"
      },
      {
        "time": "19:00",
        "course": "cycle"
      },
      {
        "time": "20:00",
        "course": "rpm"
      }
    ],
    "sunday": [
      {
        "time": "12:30",
        "course": "rpm"
      },
      {
        "time": "16:30",
        "course": "rpm"
      },
      {
        "time": "17:30",
        "course": "sprint"
      }
    ],
    "tuesday": [
      {
        "time": "08:00",
        "course": "rpm"
      },
      {
        "time": "09:00",
        "course": "cycle"
      },
      {
        "time": "16:00",
        "course": "sprint"
      },
      {
        "time": "18:00",
        "course": "rpm"
      },
      {
        "time": "19:00",
        "course": "sprint"
      }
    ],
    "friday": [
      {
        "time": "08:00",
        "course": "rpm"
      },
      {
        "time": "12:30",
        "course": "cycle"
      },
      {
        "time": "17:00",
        "course": "rpm"
      },
      {
        "time": "18:00",
        "course": "cycle"
      },
      {
        "time": "19:00",
        "course": "rpm"
      }
    ],
    "thursday": [
      {
        "time": "10:00",
        "course": "cycle"
      },
      {
        "time": "17:00",
        "course": "cycle"
      },
      {
        "time": "18:00",
        "course": "rpm"
      },
      {
        "time": "19:00",
        "course": "cycle"
      }
    ],
    "saturday": [
      {
        "time": "10:30",
        "course": "rpm"
      },
      {
        "time": "17:00",
        "course": "cycle"
      }
    ]
  },
  "berlin-europa-center": {
    "monday": [
      {
        "time": "08:00",
        "course": "yoga"
      },
      {
        "time": "09:30",
        "course": "pilates"
      },
      {
        "time": "10:30",
        "course": "bodypump"
      },
      {
        "time": "16:00",
        "course": "bodypump"
      },
      {
        "time": "17:00",
        "course": "strong"
      },
      {
        "time": "18:00",
        "course": "bodyattack"
      },
      {
        "time": "19:00",
        "course": "bodybalance"
      },
      {
        "time": "20:00",
        "course": "bauchxp"
      },
      {
        "time": "20:30",
        "course": "bodypump"
      }
    ],
    "saturday": [
      {
        "time": "11:30",
        "course": "bodypump"
      },
      {
        "time": "16:30",
        "course": "bbp"
      },
      {
        "time": "17:30",
        "course": "zumba"
      },
      {
        "time": "18:30",
        "course": "bodyattack"
      }
    ],
    "wednesday": [
      {
        "time": "09:00",
        "course": "bodyattack"
      },
      {
        "time": "10:00",
        "course": "bauchxp"
      },
      {
        "time": "10:30",
        "course": "bodypump"
      },
      {
        "time": "11:30",
        "course": "bodybalance"
      },
      {
        "time": "16:00",
        "course": "bbp"
      },
      {
        "time": "17:00",
        "course": "bodybalance"
      },
      {
        "time": "18:00",
        "course": "bodyjam"
      },
      {
        "time": "19:00",
        "course": "bodyvive"
      },
      {
        "time": "20:00",
        "course": "bodyattack"
      },
      {
        "time": "21:00",
        "course": "bodypump"
      }
    ],
    "tuesday": [
      {
        "time": "10:00",
        "course": "ruecken"
      },
      {
        "time": "11:00",
        "course": "bodyvive"
      },
      {
        "time": "16:30",
        "course": "bauchxp"
      },
      {
        "time": "17:00",
        "course": "bodypump"
      },
      {
        "time": "18:00",
        "course": "pilates"
      },
      {
        "time": "19:00",
        "course": "bodycombat"
      },
      {
        "time": "20:00",
        "course": "bodypump"
      },
      {
        "time": "21:00",
        "course": "bodyattack"
      }
    ],
    "friday": [
      {
        "time": "09:30",
        "course": "bodypump"
      },
      {
        "time": "10:30",
        "course": "bbp"
      },
      {
        "time": "11:30",
        "course": "bodybalance"
      },
      {
        "time": "16:00",
        "course": "bodypump"
      },
      {
        "time": "17:00",
        "course": "bodyvive"
      },
      {
        "time": "18:00",
        "course": "bodycombat"
      },
      {
        "time": "19:00",
        "course": "strong"
      },
      {
        "time": "20:00",
        "course": "bauchxp"
      },
      {
        "time": "20:30",
        "course": "bodybalance"
      }
    ],
    "sunday": [
      {
        "time": "10:00",
        "course": "yoga"
      },
      {
        "time": "11:30",
        "course": "bodypump"
      },
      {
        "time": "12:30",
        "course": "bodyjam"
      },
      {
        "time": "16:00",
        "course": "bodybalance"
      },
      {
        "time": "17:00",
        "course": "bodyattack"
      },
      {
        "time": "18:00",
        "course": "bauchxp"
      },
      {
        "time": "18:30",
        "course": "bodypump"
      },
      {
        "time": "19:30",
        "course": "bodycombat"
      }
    ],
    "thursday": [
      {
        "time": "10:00",
        "course": "zumba"
      },
      {
        "time": "11:00",
        "course": "yoga"
      },
      {
        "time": "16:00",
        "course": "ruecken"
      },
      {
        "time": "17:00",
        "course": "strong"
      },
      {
        "time": "18:00",
        "course": "zumba"
      },
      {
        "time": "19:00",
        "course": "bodyattack"
      },
      {
        "time": "20:00",
        "course": "bauchxp"
      },
      {
        "time": "20:30",
        "course": "bodypump"
      }
    ]
  }
    }`;
    return Observable.of(parse(data));
  }
}
