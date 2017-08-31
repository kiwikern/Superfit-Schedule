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
    if (this.scheduleRoute !== '/') {
      const fullRoute = '/schedule' + this.scheduleRoute;
      return this.activeRoute === fullRoute;
    } else {
      return this.activeRoute === '/schedule';
    }
  }

}
