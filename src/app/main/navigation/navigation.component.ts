import { Component, Input } from '@angular/core';
import { select } from '@angular-redux/store';

@Component({
  selector: 'sfs-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Input() sideNav;
  @select(['authentication', 'jwt']) jwt$;

  closeSidenav() {
    if (this.sideNav) {
      this.sideNav.close();
    }
  }

}
