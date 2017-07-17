import { Component, Input, OnInit } from '@angular/core';
import { Release } from './release.interface';
import { ChangeType } from '../entry/type.enum';

@Component({
  selector: 'sfs-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent implements OnInit {

  @Input() release: Release;

  constructor() { }

  ngOnInit() {
  }

  getTypeIcon(type: ChangeType): string {
    switch (type) {
      case ChangeType.FEATURE:
        return 'new_releases';
      case ChangeType.CHANGE:
        return 'change_history';
      case ChangeType.FIX:
        return 'bug_report';
      case ChangeType.PERFORMANCE:
        return 'timer';
    }
  }

}
