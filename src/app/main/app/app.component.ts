import { Component, OnInit } from '@angular/core';
import { SwUpdateNotificationsService } from '../../sw-updates/sw-update-notifications.service';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Angulartics2, Angulartics2GoogleAnalytics, Angulartics2Piwik } from 'angulartics2';

@Component({
  selector: 'sfs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isChild = false;
  parentPath: string;
  @select(['authentication', 'userName']) userName$: Observable<string>;
  @select() router$: Observable<string>;

  constructor(private swUpdateNotifications: SwUpdateNotificationsService,
              private angulartics: Angulartics2,
              googleAnalytics: Angulartics2GoogleAnalytics,
              piwik: Angulartics2Piwik) {
  }

  ngOnInit() {
    this.swUpdateNotifications.enable();
    this.userName$.subscribe(userName => this.angulartics.setUsername.next(userName));
    this.router$.subscribe(path => this.isChild = this.isChildPath(path));
  }

  private isChildPath(path: string): boolean {
    if (/(feedback\/.*)/.test(path)) {
      this.parentPath = '/feedback';
      return true;
    } else if (/(schedule\/class.*\/new)/.test(path)) {
      this.parentPath = path.substring(0, path.length - 4);
      return true;
    } else if (/(schedule\/class.*)/.test(path)) {
      this.parentPath = '/schedule';
      return true;
    } else {
      this.parentPath = null;
      return false;
    }
  }
}
