import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'sfs-schedule-router',
  templateUrl: './schedule-router.component.html',
  styleUrls: ['./schedule-router.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition(':increment', [
        style({height: '100vh'}),
        query(':enter', style({transform: 'translateX(100%)'})),
        query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.3s cubic-bezier(.35,0,.25,1)', style({transform: 'translateX(-100%)'})),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({transform: 'translateX(0)'}))),
        ]),
      ]),
      transition(':decrement', [
        style({height: '100vh'}),
        query(':enter', style({transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.3s cubic-bezier(.35,0,.25,1)', style({transform: 'translateX(100%)'})),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({transform: 'translateX(0)'}))),
        ]),
      ]),
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleRouterComponent implements OnInit {

  private previousPosition = -1;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  getColor(route: string) {
    if (this.router.isActive(route, true)) {
      return 'accent';
    } else {
      return '';
    }
  }

}
