import { Component, Input } from '@angular/core';

@Component({
  selector: 'sfs-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Input() sideNav;

  closeSidenav() {
    if (this.sideNav) {
      this.sideNav.close();
    }
  }

}
