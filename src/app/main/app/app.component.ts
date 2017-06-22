import { Component, OnInit } from '@angular/core';
import { SwUpdateNotificationsService } from '../../sw-updates/sw-update-notifications.service';

@Component({
  selector: 'sfs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private swUpdateNotifications: SwUpdateNotificationsService) {
  }

  ngOnInit() {
    this.swUpdateNotifications.enable();
  }
}
