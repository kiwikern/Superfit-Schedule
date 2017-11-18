import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { NavigationConfigEntry } from '../../main/navigation/navigation-config-entry.interface';

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
export class ScheduleRouterComponent {

  navigationConfiguration: NavigationConfigEntry[] = [
    {
      name: 'Kursplan',
      path: '/',
      icon: 'event'
    },
    {
      name: 'Favoriten',
      path: '/favorites',
      icon: 'favorite'
    },
    {
      name: 'Kurswahl',
      path: '/filter',
      icon: 'playlist_add'
    },
    {
      name: 'Änderungen',
      path: '/changes',
      icon: 'swap_horiz'
    },
    {
      name: 'Optionen',
      path: '/settings',
      icon: 'settings'
    }
  ];

  constructor(public router: Router) {
  }

  getActivePath() {
    let activePath = this.router.url;

    const pathIndex = activePath.indexOf('?');
    if (pathIndex !== -1) {
      activePath = activePath.substr(0, pathIndex);
    }

    const anchorIndex = activePath.indexOf('#');
    if (anchorIndex !== -1) {
      activePath = activePath.substr(0, anchorIndex);
    }

    if (activePath.startsWith('/schedule')) {
      activePath = activePath.substring(9);
    }

    if (activePath === '') {
      activePath = '/';
    }

    return activePath;
  }

}
