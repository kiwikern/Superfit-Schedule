import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sfs-schedule-router',
  templateUrl: './schedule-router.component.html',
  styleUrls: ['./schedule-router.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleRouterComponent implements OnInit {

  constructor(public router: Router) { }

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
