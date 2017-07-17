import { Component, Input, OnInit } from '@angular/core';
import { Entry } from './entry.interface';
import { ChangeType } from './type.enum';

@Component({
  selector: 'sfs-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input() entry: Entry;

  constructor() { }

  ngOnInit() {
  }

  getTypeIcon(type: ChangeType): string {
    switch (type) {
      case ChangeType.FEATURE:
        return 'add_circle';
      case ChangeType.CHANGE:
        return 'build';
      case ChangeType.FIX:
        return 'bug_report';
      case ChangeType.PERFORMANCE:
        return 'timer';
    }
  }

}
