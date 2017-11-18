import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NavigationConfigEntry } from '../../main/navigation/navigation-config-entry.interface';

@Component({
  selector: 'sfs-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomNavigationComponent implements OnInit {

  @Input() navigationConfiguration: NavigationConfigEntry[];
  @Input() activeRoute: string;

  constructor() { }

  ngOnInit() {
  }

}
