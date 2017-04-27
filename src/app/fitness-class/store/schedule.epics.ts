/**
 * Created by Kim on 02.04.2017.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    const url = 'https://kimkern.de/api/sfs/schedule';
    // const url = 'http://localhost:3000/schedule';
    return this.http.get(url);
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
  },
  "berlin-charlottenburg": {
    "monday": [
      {
        "time": "09:00",
        "course": "bodyattack"
      },
      {
        "time": "10:00",
        "course": "bodypump"
      },
      {
        "time": "11:00",
        "course": "ruecken"
      },
      {
        "time": "12:00",
        "course": "yoga"
      },
      {
        "time": "16:00",
        "course": "bauchxp"
      },
      {
        "time": "16:30",
        "course": "bodypump"
      },
      {
        "time": "17:30",
        "course": "bodybalance"
      },
      {
        "time": "18:30",
        "course": "bodycombat"
      },
      {
        "time": "19:30",
        "course": "bauchxp"
      },
      {
        "time": "20:00",
        "course": "bodypump"
      },
      {
        "time": "21:00",
        "course": "bodyattackxp"
      },
      {
        "time": "21:30",
        "course": "bauchxp"
      }
    ],
    "tuesday": [
      {
        "time": "08:30",
        "course": "yoga"
      },
      {
        "time": "10:00",
        "course": "bauchxp"
      },
      {
        "time": "10:30",
        "course": "pilates"
      },
      {
        "time": "11:30",
        "course": "bodyattack"
      },
      {
        "time": "16:00",
        "course": "bbp"
      },
      {
        "time": "17:00",
        "course": "zumba"
      },
      {
        "time": "18:00",
        "course": "bodypump"
      },
      {
        "time": "19:00",
        "course": "bauchxp"
      },
      {
        "time": "19:30",
        "course": "bodyattack"
      },
      {
        "time": "20:30",
        "course": "bodybalance"
      }
    ],
    "friday": [
      {
        "time": "09:00",
        "course": "bbp"
      },
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
        "course": "bodyattack"
      },
      {
        "time": "17:00",
        "course": "gritplyo"
      },
      {
        "time": "17:30",
        "course": "bodypump"
      },
      {
        "time": "18:30",
        "course": "yoga"
      },
      {
        "time": "20:00",
        "course": "salsation"
      }
    ],
    "wednesday": [
      {
        "time": "10:00",
        "course": "zumba"
      },
      {
        "time": "11:00",
        "course": "bbp"
      },
      {
        "time": "12:00",
        "course": "bodypump"
      },
      {
        "time": "16:30",
        "course": "bodypump"
      },
      {
        "time": "17:30",
        "course": "pilates"
      },
      {
        "time": "18:30",
        "course": "bodycombat"
      },
      {
        "time": "19:30",
        "course": "bodyattack"
      },
      {
        "time": "20:30",
        "course": "bauchxp"
      },
      {
        "time": "21:00",
        "course": "bodypump"
      }
    ],
    "sunday": [
      {
        "time": "10:00",
        "course": "zumba"
      },
      {
        "time": "11:00",
        "course": "bauchxp"
      },
      {
        "time": "11:30",
        "course": "lmistep"
      },
      {
        "time": "12:30",
        "course": "bbp"
      },
      {
        "time": "13:30",
        "course": "yoga"
      },
      {
        "time": "15:30",
        "course": "bodyattack"
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
        "course": "bodybalance"
      },
      {
        "time": "19:00",
        "course": "pilates"
      },
      {
        "time": "20:00",
        "course": "zumba"
      }
    ],
    "thursday": [
      {
        "time": "09:00",
        "course": "yogaxp"
      },
      {
        "time": "10:00",
        "course": "ruecken"
      },
      {
        "time": "11:00",
        "course": "bodypump"
      },
      {
        "time": "12:00",
        "course": "bauchxp"
      },
      {
        "time": "16:00",
        "course": "bbp"
      },
      {
        "time": "17:00",
        "course": "bodyjam"
      },
      {
        "time": "18:00",
        "course": "bodypump"
      },
      {
        "time": "19:00",
        "course": "bodycombat"
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
    "saturday": [
      {
        "time": "09:00",
        "course": "bodypump"
      },
      {
        "time": "10:00",
        "course": "pilates"
      },
      {
        "time": "11:00",
        "course": "bbp"
      },
      {
        "time": "12:00",
        "course": "bodycombat"
      },
      {
        "time": "13:00",
        "course": "bauchxp"
      },
      {
        "time": "15:30",
        "course": "yoga"
      },
      {
        "time": "17:00",
        "course": "bodypump"
      },
      {
        "time": "18:00",
        "course": "bodyattack"
      }
    ]
  },
  "berlin-koepenick": {
    "thursday": [
      {
        "time": "09:30",
        "course": "yoga"
      },
      {
        "time": "11:00",
        "course": "bbp"
      },
      {
        "time": "12:00",
        "course": "ruecken"
      },
      {
        "time": "17:00",
        "course": "bbp"
      },
      {
        "time": "18:00",
        "course": "bodypump"
      },
      {
        "time": "19:00",
        "course": "bauchxp"
      },
      {
        "time": "19:30",
        "course": "bodycombatxp"
      },
      {
        "time": "20:00",
        "course": "zumba"
      },
      {
        "time": "21:00",
        "course": "bodybalance"
      }
    ],
    "wednesday": [
      {
        "time": "10:00",
        "course": "ruecken"
      },
      {
        "time": "11:00",
        "course": "zumba"
      },
      {
        "time": "16:00",
        "course": "bodyvive"
      },
      {
        "time": "17:00",
        "course": "bodybalance"
      },
      {
        "time": "18:00",
        "course": "bodypump"
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
        "course": "yoga"
      }
    ],
    "friday": [
      {
        "time": "09:00",
        "course": "bbp"
      },
      {
        "time": "10:00",
        "course": "bodypump"
      },
      {
        "time": "11:00",
        "course": "ruecken"
      },
      {
        "time": "16:30",
        "course": "yoga"
      },
      {
        "time": "18:00",
        "course": "bbp"
      },
      {
        "time": "19:00",
        "course": "bodyattack"
      },
      {
        "time": "20:00",
        "course": "bodypump"
      }
    ],
    "monday": [
      {
        "time": "10:00",
        "course": "bbp"
      },
      {
        "time": "11:00",
        "course": "zumba"
      },
      {
        "time": "16:00",
        "course": "bodystep"
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
        "course": "bauchxp"
      },
      {
        "time": "19:30",
        "course": "bodyattack"
      },
      {
        "time": "20:30",
        "course": "bodypump"
      }
    ],
    "saturday": [
      {
        "time": "10:00",
        "course": "bodystep"
      },
      {
        "time": "11:00",
        "course": "bodypump"
      },
      {
        "time": "12:00",
        "course": "bauchxp"
      },
      {
        "time": "12:30",
        "course": "bodybalance"
      },
      {
        "time": "17:00",
        "course": "bbp"
      },
      {
        "time": "18:00",
        "course": "bodybalance"
      }
    ],
    "sunday": [
      {
        "time": "10:00",
        "course": "bodypump"
      },
      {
        "time": "11:00",
        "course": "pilates"
      },
      {
        "time": "16:00",
        "course": "zumba"
      },
      {
        "time": "17:00",
        "course": "bbp"
      },
      {
        "time": "18:00",
        "course": "bodypump"
      },
      {
        "time": "19:00",
        "course": "bauchxp"
      },
      {
        "time": "19:30",
        "course": "bodycombat"
      }
    ],
    "tuesday": [
      {
        "time": "10:00",
        "course": "bodypump"
      },
      {
        "time": "11:00",
        "course": "bodybalance"
      },
      {
        "time": "12:00",
        "course": "bbp"
      },
      {
        "time": "16:30",
        "course": "bodybalance"
      },
      {
        "time": "17:30",
        "course": "bodypump"
      },
      {
        "time": "18:30",
        "course": "bauchxp"
      },
      {
        "time": "19:00",
        "course": "zumba"
      },
      {
        "time": "20:00",
        "course": "lmistep"
      },
      {
        "time": "21:00",
        "course": "bauchxp"
      }
    ]
  },
  "berlin-friedrichshain": {
    "friday": [
      {
        "time": "07:30",
        "course": "yoga"
      },
      {
        "time": "09:00",
        "course": "bbp"
      },
      {
        "time": "10:00",
        "course": "bodyattack"
      },
      {
        "time": "11:00",
        "course": "bodypump"
      },
      {
        "time": "12:00",
        "course": "bauchxp"
      },
      {
        "time": "15:30",
        "course": "bodypumpxp"
      },
      {
        "time": "16:00",
        "course": "lmistep"
      },
      {
        "time": "17:00",
        "course": "bodyvivexp"
      },
      {
        "time": "17:30",
        "course": "bauchxp"
      },
      {
        "time": "18:00",
        "course": "bodypump"
      },
      {
        "time": "19:00",
        "course": "bodybalance"
      },
      {
        "time": "20:00",
        "course": "bodycombat"
      },
      {
        "time": "21:00",
        "course": "gritplyo"
      }
    ],
    "monday": [
      {
        "time": "09:00",
        "course": "bbp"
      },
      {
        "time": "10:00",
        "course": "pilates"
      },
      {
        "time": "11:00",
        "course": "bodyvive"
      },
      {
        "time": "12:00",
        "course": "bodypumpxp"
      },
      {
        "time": "15:30",
        "course": "bodypumpxp"
      },
      {
        "time": "16:00",
        "course": "bodyattack"
      },
      {
        "time": "17:00",
        "course": "bodystep"
      },
      {
        "time": "18:00",
        "course": "bodypump"
      },
      {
        "time": "19:00",
        "course": "bodybalance"
      },
      {
        "time": "20:00",
        "course": "bbp"
      },
      {
        "time": "21:00",
        "course": "bodypump"
      },
      {
        "time": "22:00",
        "course": "bauchxp"
      }
    ],
    "wednesday": [
      {
        "time": "08:30",
        "course": "yoga"
      },
      {
        "time": "10:00",
        "course": "pilates"
      },
      {
        "time": "11:00",
        "course": "bodypump"
      },
      {
        "time": "12:00",
        "course": "gritplyo"
      },
      {
        "time": "15:30",
        "course": "zumba"
      },
      {
        "time": "16:30",
        "course": "bodyvive"
      },
      {
        "time": "17:30",
        "course": "bodybalance"
      },
      {
        "time": "18:30",
        "course": "bodypump"
      },
      {
        "time": "19:30",
        "course": "lmistepxp"
      },
      {
        "time": "20:00",
        "course": "bodyattackxp"
      },
      {
        "time": "20:30",
        "course": "yoga"
      }
    ],
    "saturday": [
      {
        "time": "09:00",
        "course": "bodypump"
      },
      {
        "time": "10:00",
        "course": "bodystep"
      },
      {
        "time": "11:00",
        "course": "bodyvive"
      },
      {
        "time": "12:00",
        "course": "bodyattack"
      },
      {
        "time": "13:00",
        "course": "bauchxp"
      },
      {
        "time": "17:30",
        "course": "bodypump"
      },
      {
        "time": "18:30",
        "course": "bbp"
      }
    ],
    "sunday": [
      {
        "time": "10:00",
        "course": "zumba"
      },
      {
        "time": "11:00",
        "course": "bodycombat"
      },
      {
        "time": "12:00",
        "course": "bauchxp"
      },
      {
        "time": "12:30",
        "course": "bodybalance"
      },
      {
        "time": "13:30",
        "course": "bodypump"
      },
      {
        "time": "14:30",
        "course": "gritplyo"
      },
      {
        "time": "15:00",
        "course": "yoga"
      },
      {
        "time": "16:30",
        "course": "bbp"
      },
      {
        "time": "17:30",
        "course": "bauchxp"
      },
      {
        "time": "18:00",
        "course": "bodyattack"
      },
      {
        "time": "19:00",
        "course": "bodypump"
      },
      {
        "time": "20:00",
        "course": "bauchxp"
      }
    ],
    "tuesday": [
      {
        "time": "08:00",
        "course": "bodybalance"
      },
      {
        "time": "09:00",
        "course": "bodyattackxp"
      },
      {
        "time": "09:30",
        "course": "bodypump"
      },
      {
        "time": "10:30",
        "course": "zumba"
      },
      {
        "time": "15:30",
        "course": "yogaxp"
      },
      {
        "time": "16:30",
        "course": "gritplyo"
      },
      {
        "time": "17:00",
        "course": "bodypump"
      },
      {
        "time": "18:00",
        "course": "bodycombat"
      },
      {
        "time": "19:00",
        "course": "bodyattack"
      },
      {
        "time": "20:00",
        "course": "bodypump"
      },
      {
        "time": "21:00",
        "course": "bauchxp"
      }
    ],
    "thursday": [
      {
        "time": "09:00",
        "course": "bodypump"
      },
      {
        "time": "10:00",
        "course": "bodyvive"
      },
      {
        "time": "11:00",
        "course": "ruecken"
      },
      {
        "time": "12:00",
        "course": "bbp"
      },
      {
        "time": "16:00",
        "course": "bodypump"
      },
      {
        "time": "17:00",
        "course": "bodystep"
      },
      {
        "time": "18:00",
        "course": "bodyattack"
      },
      {
        "time": "19:00",
        "course": "bodypump"
      },
      {
        "time": "20:00",
        "course": "zumba"
      },
      {
        "time": "21:00",
        "course": "bbp"
      }
    ]
  },
  "berlin-mitte": {
    "tuesday": [
      {
        "time": "09:00",
        "course": "bbp"
      },
      {
        "time": "10:00",
        "course": "lmistepxp"
      },
      {
        "time": "10:30",
        "course": "bodyattackxp"
      },
      {
        "time": "11:00",
        "course": "bodypump"
      },
      {
        "time": "12:00",
        "course": "yogaxp"
      },
      {
        "time": "15:30",
        "course": "bauchxp"
      },
      {
        "time": "16:00",
        "course": "bodypump"
      },
      {
        "time": "17:00",
        "course": "bodybalance"
      },
      {
        "time": "18:00",
        "course": "bodycombat"
      },
      {
        "time": "19:00",
        "course": "bodypump"
      },
      {
        "time": "20:00",
        "course": "bauchxp"
      },
      {
        "time": "20:30",
        "course": "yoga-e"
      }
    ],
    "monday": [
      {
        "time": "09:00",
        "course": "ruecken"
      },
      {
        "time": "10:00",
        "course": "zumba"
      },
      {
        "time": "11:00",
        "course": "bodypump"
      },
      {
        "time": "12:00",
        "course": "bauchxp"
      },
      {
        "time": "15:30",
        "course": "bbp"
      },
      {
        "time": "16:30",
        "course": "pilates"
      },
      {
        "time": "17:30",
        "course": "bodyjam"
      },
      {
        "time": "18:30",
        "course": "bauchxp"
      },
      {
        "time": "19:00",
        "course": "bodyattack"
      },
      {
        "time": "20:00",
        "course": "bodypump"
      },
      {
        "time": "21:00",
        "course": "gritplyo"
      }
    ],
    "friday": [
      {
        "time": "09:30",
        "course": "bodyattack"
      },
      {
        "time": "10:30",
        "course": "yoga"
      },
      {
        "time": "12:00",
        "course": "bbp"
      },
      {
        "time": "16:00",
        "course": "bauchxp"
      },
      {
        "time": "16:30",
        "course": "zumba"
      },
      {
        "time": "17:30",
        "course": "bodypump-e"
      },
      {
        "time": "18:30",
        "course": "bodybalance"
      },
      {
        "time": "19:30",
        "course": "bodyjam"
      },
      {
        "time": "20:30",
        "course": "bodyattack-e"
      }
    ],
    "saturday": [
      {
        "time": "10:00",
        "course": "ruecken"
      },
      {
        "time": "11:00",
        "course": "bodyjam"
      },
      {
        "time": "12:00",
        "course": "bodystep"
      },
      {
        "time": "13:00",
        "course": "bodypump"
      },
      {
        "time": "14:00",
        "course": "bodyattack"
      },
      {
        "time": "15:00",
        "course": "bodybalance"
      },
      {
        "time": "16:30",
        "course": "bauchxp"
      },
      {
        "time": "17:00",
        "course": "bodypump"
      }
    ],
    "thursday": [
      {
        "time": "10:00",
        "course": "bodypump"
      },
      {
        "time": "11:00",
        "course": "pilates"
      },
      {
        "time": "15:00",
        "course": "bbp"
      },
      {
        "time": "16:00",
        "course": "bodypump"
      },
      {
        "time": "17:00",
        "course": "gritplyo"
      },
      {
        "time": "17:30",
        "course": "bodycombat"
      },
      {
        "time": "18:30",
        "course": "bodybalance"
      },
      {
        "time": "19:30",
        "course": "bauchxp"
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
    "sunday": [
      {
        "time": "10:00",
        "course": "bodypump-e"
      },
      {
        "time": "11:00",
        "course": "bodyattack-e"
      },
      {
        "time": "12:00",
        "course": "gritplyo"
      },
      {
        "time": "12:30",
        "course": "bauchxp"
      },
      {
        "time": "13:00",
        "course": "bodybalance"
      },
      {
        "time": "14:00",
        "course": "bodycombat"
      },
      {
        "time": "15:00",
        "course": "bbp"
      },
      {
        "time": "16:00",
        "course": "bodypump"
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
        "course": "zumba"
      },
      {
        "time": "19:30",
        "course": "yoga"
      }
    ],
    "wednesday": [
      {
        "time": "08:00",
        "course": "bodypump"
      },
      {
        "time": "09:00",
        "course": "pilates"
      },
      {
        "time": "10:00",
        "course": "yoga"
      },
      {
        "time": "11:30",
        "course": "zumba"
      },
      {
        "time": "15:30",
        "course": "bodypump"
      },
      {
        "time": "16:30",
        "course": "bauchxp"
      },
      {
        "time": "17:00",
        "course": "bodyjam"
      },
      {
        "time": "18:00",
        "course": "bodypump"
      },
      {
        "time": "19:00",
        "course": "bauchxp"
      },
      {
        "time": "19:30",
        "course": "bodyattack"
      },
      {
        "time": "20:30",
        "course": "bodybalance-e"
      }
    ]
  },
  "berlin-steglitz": {
    "tuesday": [
      {
        "time": "08:00",
        "course": "bodypump"
      },
      {
        "time": "09:00",
        "course": "bauchxp"
      },
      {
        "time": "09:30",
        "course": "bodybalance"
      },
      {
        "time": "10:30",
        "course": "ruecken"
      },
      {
        "time": "11:30",
        "course": "bauchxp"
      },
      {
        "time": "16:00",
        "course": "pilates"
      },
      {
        "time": "17:00",
        "course": "bodybalance"
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
        "course": "ruecken"
      },
      {
        "time": "20:30",
        "course": "bodypump"
      },
      {
        "time": "21:30",
        "course": "bauchxp"
      }
    ],
    "friday": [
      {
        "time": "08:30",
        "course": "bodypump"
      },
      {
        "time": "09:30",
        "course": "bauchxp"
      },
      {
        "time": "10:00",
        "course": "bodybalance"
      },
      {
        "time": "17:30",
        "course": "bodypump"
      },
      {
        "time": "18:30",
        "course": "bbp2"
      },
      {
        "time": "19:30",
        "course": "bauchxp"
      },
      {
        "time": "20:00",
        "course": "bodybalance"
      }
    ],
    "monday": [
      {
        "time": "07:30",
        "course": "bodypump"
      },
      {
        "time": "08:30",
        "course": "bauchxp"
      },
      {
        "time": "10:00",
        "course": "pilates"
      },
      {
        "time": "11:00",
        "course": "yoga"
      },
      {
        "time": "16:00",
        "course": "bodybalance"
      },
      {
        "time": "17:00",
        "course": "bauchxp"
      },
      {
        "time": "17:30",
        "course": "bodypump"
      },
      {
        "time": "18:30",
        "course": "bbp2"
      },
      {
        "time": "19:30",
        "course": "ruecken"
      },
      {
        "time": "20:30",
        "course": "bodypump"
      },
      {
        "time": "21:30",
        "course": "bauchxp"
      }
    ],
    "wednesday": [
      {
        "time": "08:00",
        "course": "yoga"
      },
      {
        "time": "09:30",
        "course": "bodybalance"
      },
      {
        "time": "10:30",
        "course": "bauchxp"
      },
      {
        "time": "11:00",
        "course": "bodypump"
      },
      {
        "time": "12:00",
        "course": "bauchxp"
      },
      {
        "time": "16:30",
        "course": "pilates"
      },
      {
        "time": "17:30",
        "course": "bauchxp"
      },
      {
        "time": "18:00",
        "course": "ruecken"
      },
      {
        "time": "19:00",
        "course": "bodypump"
      },
      {
        "time": "20:00",
        "course": "bodybalance"
      }
    ],
    "thursday": [
      {
        "time": "08:30",
        "course": "bodypump"
      },
      {
        "time": "09:30",
        "course": "bauchxp"
      },
      {
        "time": "10:00",
        "course": "bodybalance"
      },
      {
        "time": "11:00",
        "course": "yogaxp"
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
        "course": "bodybalance"
      },
      {
        "time": "19:00",
        "course": "bauchxp"
      },
      {
        "time": "19:30",
        "course": "bodypump"
      },
      {
        "time": "20:30",
        "course": "bauchxp"
      }
    ],
    "saturday": [
      {
        "time": "09:30",
        "course": "bauchxp"
      },
      {
        "time": "10:00",
        "course": "bodypump"
      },
      {
        "time": "11:00",
        "course": "pilates"
      },
      {
        "time": "16:30",
        "course": "bodypump"
      },
      {
        "time": "17:30",
        "course": "bauchxp"
      }
    ],
    "sunday": [
      {
        "time": "09:30",
        "course": "bodypump"
      },
      {
        "time": "10:30",
        "course": "bauchxp"
      },
      {
        "time": "11:00",
        "course": "pilates"
      },
      {
        "time": "12:00",
        "course": "bodybalance"
      },
      {
        "time": "13:00",
        "course": "bodypump"
      },
      {
        "time": "14:00",
        "course": "bauchxp"
      },
      {
        "time": "16:00",
        "course": "yoga"
      },
      {
        "time": "17:30",
        "course": "ruecken"
      },
      {
        "time": "18:30",
        "course": "bodypump"
      },
      {
        "time": "19:30",
        "course": "bauchxp"
      }
    ]
  },
  "berlin-steglitz-women": {
    "tuesday": [
      {
        "time": "09:00",
        "course": "bbp2"
      },
      {
        "time": "10:00",
        "course": "yoga"
      },
      {
        "time": "11:30",
        "course": "bodypump"
      },
      {
        "time": "16:00",
        "course": "bodyvive"
      },
      {
        "time": "17:00",
        "course": "bodypump"
      },
      {
        "time": "18:00",
        "course": "bbp2"
      },
      {
        "time": "19:00",
        "course": "pilates"
      },
      {
        "time": "20:00",
        "course": "bodybalance"
      }
    ],
    "friday": [
      {
        "time": "09:30",
        "course": "ruecken"
      },
      {
        "time": "10:30",
        "course": "bbp2"
      },
      {
        "time": "11:30",
        "course": "bodypump"
      },
      {
        "time": "16:00",
        "course": "bbp2"
      },
      {
        "time": "17:00",
        "course": "ruecken"
      },
      {
        "time": "18:00",
        "course": "strong"
      },
      {
        "time": "19:00",
        "course": "bodystep"
      },
      {
        "time": "20:00",
        "course": "bodypump"
      }
    ],
    "sunday": [
      {
        "time": "10:30",
        "course": "bbp2"
      },
      {
        "time": "11:30",
        "course": "ruecken"
      },
      {
        "time": "12:30",
        "course": "zumba"
      },
      {
        "time": "15:00",
        "course": "bbp2"
      },
      {
        "time": "16:00",
        "course": "bodypump"
      },
      {
        "time": "17:00",
        "course": "bbp2"
      },
      {
        "time": "18:00",
        "course": "bodybalance"
      },
      {
        "time": "19:00",
        "course": "bbp2"
      }
    ],
    "wednesday": [
      {
        "time": "09:30",
        "course": "bbp2"
      },
      {
        "time": "10:30",
        "course": "bodystep"
      },
      {
        "time": "11:30",
        "course": "bodybalance"
      },
      {
        "time": "15:30",
        "course": "bodypumpxp"
      },
      {
        "time": "16:00",
        "course": "bbp2"
      },
      {
        "time": "17:00",
        "course": "bodystep"
      },
      {
        "time": "18:00",
        "course": "zumba"
      },
      {
        "time": "19:00",
        "course": "bodybalance"
      },
      {
        "time": "20:00",
        "course": "bbp2"
      },
      {
        "time": "21:00",
        "course": "strong"
      }
    ],
    "monday": [
      {
        "time": "09:00",
        "course": "ruecken"
      },
      {
        "time": "10:00",
        "course": "lmistep"
      },
      {
        "time": "11:00",
        "course": "bbp2"
      },
      {
        "time": "15:30",
        "course": "bodypumpxp"
      },
      {
        "time": "16:00",
        "course": "bbp2"
      },
      {
        "time": "17:00",
        "course": "bodystep"
      },
      {
        "time": "18:00",
        "course": "zumba"
      },
      {
        "time": "19:00",
        "course": "bbp2"
      },
      {
        "time": "20:00",
        "course": "bodybalance"
      },
      {
        "time": "21:00",
        "course": "bbp2"
      }
    ],
    "thursday": [
      {
        "time": "09:30",
        "course": "ruecken"
      },
      {
        "time": "10:30",
        "course": "bbp2"
      },
      {
        "time": "11:30",
        "course": "pilates"
      },
      {
        "time": "16:00",
        "course": "ruecken"
      },
      {
        "time": "17:00",
        "course": "bbp2"
      },
      {
        "time": "18:00",
        "course": "bodyvive"
      },
      {
        "time": "19:00",
        "course": "bodybalance"
      },
      {
        "time": "20:00",
        "course": "zumba"
      }
    ],
    "saturday": [
      {
        "time": "09:30",
        "course": "bbp2"
      },
      {
        "time": "10:30",
        "course": "yoga"
      },
      {
        "time": "12:00",
        "course": "bodystep"
      },
      {
        "time": "13:00",
        "course": "bbp2"
      },
      {
        "time": "14:00",
        "course": "bodybalance"
      },
      {
        "time": "15:00",
        "course": "bbp2"
      },
      {
        "time": "16:00",
        "course": "zumba"
      }
    ]
  },
  "berlin-tegel": {
    "monday": [
      {
        "time": "08:30",
        "course": "fatburner"
      },
      {
        "time": "09:30",
        "course": "bodypump"
      },
      {
        "time": "10:30",
        "course": "bodystep"
      },
      {
        "time": "11:30",
        "course": "ruecken"
      },
      {
        "time": "15:30",
        "course": "jumpingfitness"
      },
      {
        "time": "16:30",
        "course": "bodypump"
      },
      {
        "time": "17:30",
        "course": "bauchxp"
      },
      {
        "time": "18:00",
        "course": "bodyattack"
      },
      {
        "time": "19:00",
        "course": "lmistep"
      },
      {
        "time": "20:00",
        "course": "zumba"
      },
      {
        "time": "21:00",
        "course": "jumpingfitness"
      }
    ],
    "tuesday": [
      {
        "time": "09:00",
        "course": "zumba"
      },
      {
        "time": "10:00",
        "course": "pilates"
      },
      {
        "time": "11:00",
        "course": "bodybalance"
      },
      {
        "time": "16:00",
        "course": "bodybalance"
      },
      {
        "time": "17:00",
        "course": "bodyvive"
      },
      {
        "time": "18:00",
        "course": "fatburner"
      },
      {
        "time": "19:00",
        "course": "bauchxp"
      },
      {
        "time": "19:30",
        "course": "bodyattack"
      },
      {
        "time": "20:30",
        "course": "bodypump"
      },
      {
        "time": "21:30",
        "course": "bauchxp"
      }
    ],
    "wednesday": [
      {
        "time": "09:00",
        "course": "bodypump"
      },
      {
        "time": "10:00",
        "course": "ruecken"
      },
      {
        "time": "11:00",
        "course": "yoga"
      },
      {
        "time": "16:00",
        "course": "jumpingfitness"
      },
      {
        "time": "17:00",
        "course": "bodyattack"
      },
      {
        "time": "18:00",
        "course": "bodypump"
      },
      {
        "time": "19:00",
        "course": "zumba"
      },
      {
        "time": "20:00",
        "course": "bbp"
      },
      {
        "time": "21:00",
        "course": "bodybalance"
      }
    ],
    "friday": [
      {
        "time": "07:30",
        "course": "yoga"
      },
      {
        "time": "09:00",
        "course": "ruecken"
      },
      {
        "time": "10:00",
        "course": "bodyvive"
      },
      {
        "time": "11:00",
        "course": "fatburner"
      },
      {
        "time": "12:00",
        "course": "jumpingfitness"
      },
      {
        "time": "16:30",
        "course": "bodyattack"
      },
      {
        "time": "17:30",
        "course": "bauchxp"
      },
      {
        "time": "18:00",
        "course": "bodycombat"
      },
      {
        "time": "19:00",
        "course": "bodypump"
      },
      {
        "time": "20:00",
        "course": "bbp"
      }
    ],
    "sunday": [
      {
        "time": "09:00",
        "course": "bodypump"
      },
      {
        "time": "10:00",
        "course": "bodybalance"
      },
      {
        "time": "11:00",
        "course": "pilates"
      },
      {
        "time": "12:00",
        "course": "yoga"
      },
      {
        "time": "14:00",
        "course": "jumpingfitness"
      },
      {
        "time": "15:00",
        "course": "bbp"
      },
      {
        "time": "16:00",
        "course": "bodyattack"
      },
      {
        "time": "17:00",
        "course": "fatburner"
      },
      {
        "time": "18:00",
        "course": "bodypump"
      }
    ],
    "thursday": [
      {
        "time": "09:00",
        "course": "bbp"
      },
      {
        "time": "10:00",
        "course": "bodybalance"
      },
      {
        "time": "11:00",
        "course": "zumba"
      },
      {
        "time": "12:00",
        "course": "bauchxp"
      },
      {
        "time": "16:00",
        "course": "bauchxp"
      },
      {
        "time": "16:30",
        "course": "bodypump"
      },
      {
        "time": "17:30",
        "course": "jumpingfitness"
      },
      {
        "time": "18:30",
        "course": "bauchxp"
      },
      {
        "time": "19:00",
        "course": "bodyattack"
      },
      {
        "time": "20:00",
        "course": "bodypump"
      },
      {
        "time": "21:00",
        "course": "bauchxp"
      }
    ],
    "saturday": [
      {
        "time": "09:00",
        "course": "zumba"
      },
      {
        "time": "10:00",
        "course": "pilates"
      },
      {
        "time": "11:00",
        "course": "bodypump"
      },
      {
        "time": "12:00",
        "course": "bodystep"
      },
      {
        "time": "13:00",
        "course": "jumpingfitness"
      },
      {
        "time": "15:30",
        "course": "yoga"
      },
      {
        "time": "17:00",
        "course": "bodypump"
      },
      {
        "time": "18:00",
        "course": "bauchxp"
      },
      {
        "time": "18:30",
        "course": "bodyattack"
      }
    ]
  },
  "brandenburg-potsdam": {
    "monday": [
      {
        "time": "09:30",
        "course": "ruecken"
      },
      {
        "time": "10:30",
        "course": "fatburner"
      },
      {
        "time": "11:30",
        "course": "bodybalance"
      },
      {
        "time": "16:00",
        "course": "jumpingfitness"
      },
      {
        "time": "17:00",
        "course": "bodypump"
      },
      {
        "time": "18:00",
        "course": "bodybalance"
      },
      {
        "time": "19:00",
        "course": "bbp"
      },
      {
        "time": "20:00",
        "course": "zumba"
      },
      {
        "time": "21:00",
        "course": "bodypump"
      }
    ],
    "wednesday": [
      {
        "time": "10:00",
        "course": "bbp"
      },
      {
        "time": "11:00",
        "course": "zumba"
      },
      {
        "time": "17:00",
        "course": "bauchxp"
      },
      {
        "time": "17:30",
        "course": "shbam"
      },
      {
        "time": "18:30",
        "course": "bodypump"
      },
      {
        "time": "19:30",
        "course": "bodycombat"
      },
      {
        "time": "20:30",
        "course": "bodybalance"
      }
    ],
    "friday": [
      {
        "time": "09:00",
        "course": "bbp"
      },
      {
        "time": "10:00",
        "course": "bodypump"
      },
      {
        "time": "11:00",
        "course": "bodybalance"
      },
      {
        "time": "16:00",
        "course": "jumpingfitness"
      },
      {
        "time": "17:00",
        "course": "bauchxp"
      },
      {
        "time": "17:30",
        "course": "bodyattack"
      },
      {
        "time": "18:30",
        "course": "bodybalancexp"
      },
      {
        "time": "19:00",
        "course": "bodypump"
      },
      {
        "time": "20:00",
        "course": "bauchxp"
      }
    ],
    "tuesday": [
      {
        "time": "10:00",
        "course": "bodypump"
      },
      {
        "time": "11:00",
        "course": "bauchxp"
      },
      {
        "time": "16:30",
        "course": "bbp"
      },
      {
        "time": "17:30",
        "course": "bodyattack"
      },
      {
        "time": "18:30",
        "course": "bodypump"
      },
      {
        "time": "19:30",
        "course": "bodycombat"
      },
      {
        "time": "20:30",
        "course": "jumpingfitness"
      }
    ],
    "thursday": [
      {
        "time": "09:30",
        "course": "yoga"
      },
      {
        "time": "11:00",
        "course": "pilates"
      },
      {
        "time": "16:00",
        "course": "jumpingfitness"
      },
      {
        "time": "17:00",
        "course": "shbam"
      },
      {
        "time": "18:00",
        "course": "bodypump"
      },
      {
        "time": "19:00",
        "course": "bodybalance"
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
    "saturday": [
      {
        "time": "10:00",
        "course": "shbam"
      },
      {
        "time": "11:00",
        "course": "bodypump"
      },
      {
        "time": "12:00",
        "course": "lmistep"
      },
      {
        "time": "13:00",
        "course": "jumpingfitness"
      },
      {
        "time": "17:00",
        "course": "bodypump"
      },
      {
        "time": "18:00",
        "course": "bodycombat"
      }
    ],
    "sunday": [
      {
        "time": "10:00",
        "course": "bbp"
      },
      {
        "time": "11:00",
        "course": "ruecken"
      },
      {
        "time": "12:00",
        "course": "bodypump"
      },
      {
        "time": "13:00",
        "course": "jumpingfitness"
      },
      {
        "time": "17:00",
        "course": "bodyattack"
      },
      {
        "time": "18:00",
        "course": "bodybalance"
      },
      {
        "time": "19:00",
        "course": "bodypump"
      }
    ]
  }
}`;
    return Observable.of(parse(data));
  }
}
