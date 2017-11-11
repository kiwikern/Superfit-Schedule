import { Component, EventEmitter, Input, Output } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { NavigationConfigEntry } from './navigation-config-entry.interface';

@Component({
  selector: 'sfs-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Input() fullWidth = true;
  @Input() isLoggedIn: boolean;
  @Output() onClick = new EventEmitter();
  @select() router$: Observable<string>;

  navigationConfiguration: NavigationConfigEntry[] = [
    {
      name: 'Kursplan',
      path: '/schedule',
      icon: 'event'
    },
    {
      name: 'Favoriten',
      path: '/schedule/favorites',
      icon: 'favorite'
    },
    {
      name: 'Kurswahl',
      path: '/schedule/filter',
      icon: 'playlist_add'
    }
    ,
    {
      name: 'Änderungen',
      path: '/schedule/changes',
      icon: 'swap_horiz'
    },
    {
      name: 'Login',
      path: '/auth',
      icon: 'person',
      loginStateMustBe: false
    },
    {
      name: 'Account',
      path: '/auth',
      icon: 'person',
      loginStateMustBe: true
    },
    {
      name: 'Optionen',
      path: '/schedule/settings',
      icon: 'settings'
    }
    ,
    {
      name: 'Feedback',
      path: '/feedback',
      icon: 'feedback'
    },
    {
      name: 'Über',
      path: '/about',
      icon: 'import_contacts'
    }];

}

