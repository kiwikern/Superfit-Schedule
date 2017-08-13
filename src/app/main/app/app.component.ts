import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Angulartics2, Angulartics2GoogleAnalytics, Angulartics2Piwik } from 'angulartics2';
import { SwUpdatesService } from '../../sw-updates/sw-updates.service';
import { ScrollService } from '../../common/scroll.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'sfs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isChild = false;
  parentPath: string;
  fragment: string;
  @select(['authentication', 'userName']) userName$: Observable<string>;
  @select() router$: Observable<string>;

  constructor(private swUpdatesService: SwUpdatesService,
              private angulartics: Angulartics2,
              private scrollService: ScrollService,
              private router: Router,
              googleAnalytics: Angulartics2GoogleAnalytics,
              piwik: Angulartics2Piwik) {
  }

  ngOnInit() {
    this.swUpdatesService.updateActivated.subscribe();
    this.userName$.subscribe(userName => this.angulartics.setUsername.next(userName));
    this.router$.subscribe(path => this.isChild = this.isChildPath(path));
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scroll(this.router.url);
      }
    });
  }

  private isChildPath(path: string): boolean {
    if (/(feedback\/.*)/.test(path)) {
      this.parentPath = '/feedback';
      this.fragment = null;
      return true;
    } else if (/(schedule\/class.*\/new)/.test(path)) {
      this.parentPath = path.substring(0, path.length - 4);
      this.fragment = null;
      return true;
    } else if (/(schedule\/class.*)/.test(path)) {
      this.parentPath = '/schedule';
      this.fragment = this.getClassId(path);
      return true;
    } else {
      this.parentPath = null;
      this.fragment = null;
      return false;
    }
  }

  private scroll(path: string) {
    const scrollId = this.getScrollId(path);
    if (scrollId) {
      setTimeout(() => this.scrollService.scrollToId(scrollId), 0);
    } else {
      this.scrollService.scrollToTop();
    }
  }

  private getScrollId(path: string): string {
    const regex = /#(\w+)\/?$/;
    const matches = path.match(regex);
    if (matches && matches[1]) {
      return matches[1];
    } else {
      return null;
    }
  }

  private getClassId(path: string): string {
    const regex = /class\/(\w+)(\/|$)/;
    const matches = path.match(regex);
    if (matches && matches[1]) {
      return matches[1];
    } else {
      return null;
    }
  }
}
