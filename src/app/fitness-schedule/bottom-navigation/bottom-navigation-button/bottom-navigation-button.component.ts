import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

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
  @Input() isActive: boolean;

  constructor() {
  }

  ngOnInit() {
  }


}
