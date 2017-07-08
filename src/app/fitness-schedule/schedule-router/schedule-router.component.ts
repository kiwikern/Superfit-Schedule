import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sfs-schedule-router',
  templateUrl: './schedule-router.component.html',
  styleUrls: ['./schedule-router.component.css']
})
export class ScheduleRouterComponent implements OnInit {

  constructor(private router: Router) { }

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
