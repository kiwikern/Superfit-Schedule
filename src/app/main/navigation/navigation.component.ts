import { Component, EventEmitter, Input, Output } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'sfs-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Input() fullWidth = true;
  @Output() onClick = new EventEmitter();
  @select(['authentication', 'jwt']) jwt$;
  @select() router$: Observable<string>;

}
