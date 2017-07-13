import { Component, OnInit } from '@angular/core';
import { SwUpdateNotificationsService } from '../../sw-updates/sw-update-notifications.service';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'sfs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @select(['authentication', 'userName']) userName$: Observable<string>;

  constructor(private swUpdateNotifications: SwUpdateNotificationsService,
  private piwik: Angulartics2) {
  }

  ngOnInit() {
    this.swUpdateNotifications.enable();
    this.userName$.subscribe(userName => this.piwik.setUsername.next(userName));
  }
}
