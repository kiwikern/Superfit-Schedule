import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sfs-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.css']
})
export class NavigationButtonComponent implements OnInit {

  @Input() sideNav;
  @Input() path: string;
  @Input() icon: string;
  @Input() name: string;
  @Input() fullWidth = true;
  @Input() activeRoute: string;

  constructor() {
  }

  ngOnInit() {
  }

  isActive(): boolean {
    const isAuthRoute = /auth/.test(this.activeRoute) && /auth/.test(this.path);
    return this.activeRoute === this.path || isAuthRoute;
  }

}
