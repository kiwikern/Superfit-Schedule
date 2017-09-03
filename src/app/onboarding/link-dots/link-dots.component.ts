import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'sfs-link-dots',
  templateUrl: './link-dots.component.html',
  styleUrls: ['./link-dots.component.css']
})
export class LinkDotsComponent implements OnInit, OnDestroy {

  @Input() steps: string[];
  @select() router$: Observable<string>;
  activeIndex = 0;
  onDestroy = new Subject();

  constructor() {
  }

  ngOnInit() {
    this.router$
      .takeUntil(this.onDestroy)
      .subscribe(route => this.activeIndex = this.getActiveIndex(route));
  }

  ngOnDestroy() {
    this.onDestroy.next();
  }

  next(): boolean {
    if (this.activeIndex < this.steps.length - 1) {
      this.activeIndex++;
      return true;
    } else {
      return false;
    }
  }

  private getActiveIndex(route: string): number {
    return this.steps.findIndex(step => this.isActiveRoute(route, step));
  }

  private isActiveRoute(route: string, step: string): boolean {
    const regex = new RegExp(`onboarding:${step}`);
    return regex.test(route);
  }

}
