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

  constructor() { }

  ngOnInit() {
  }

  closeSidenav() {
    if (this.sideNav) {
      this.sideNav.close();
    }
  }
}
