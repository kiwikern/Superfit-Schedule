import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sfs-bottom-navigation-button',
  templateUrl: './bottom-navigation-button.component.html',
  styleUrls: ['./bottom-navigation-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomNavigationButtonComponent implements OnInit {

  @Input() scheduleRoute: string;
  @Input() name: string;
  @Input() icon: string;
  @Input() activeRoute: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  isActive(): boolean {
    const activePath = this.getActivePath();
    if (this.scheduleRoute !== '/') {
      const fullRoute = '/schedule' + this.scheduleRoute;
      return activePath === fullRoute;
    } else {
      return activePath === '/schedule';
    }
  }

  private getActivePath() {
    let activePath = this.activeRoute;

    const pathIndex = this.activeRoute.indexOf('?');
    if (pathIndex !== -1) {
      activePath = activePath.substr(0, pathIndex);
    }

    const anchorIndex = this.activeRoute.indexOf('#');
    if (anchorIndex !== -1) {
      activePath = activePath.substr(0, anchorIndex);
    }

    return activePath;
  }
}
