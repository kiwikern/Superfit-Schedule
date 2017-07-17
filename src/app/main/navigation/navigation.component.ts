import { Component, Input } from '@angular/core';
import { select } from '@angular-redux/store';

@Component({
  selector: 'sfs-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Input() sideNav;
  @Input() fullWidth = true;
  @select(['authentication', 'jwt']) jwt$;


}
