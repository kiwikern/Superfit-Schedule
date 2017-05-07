import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sfs-time-filter',
  templateUrl: './time-filter.component.html',
  styleUrls: ['./time-filter.component.css']
})
export class TimeFilterComponent implements OnInit {

  readonly MIN_TIME = 5;
  readonly MAX_TIME = 22;
  @Input() minStartTime: number;
  @Input() maxEndTime: number;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  getTimeText(hour: number): string {
    if (!hour || hour === this.MIN_TIME) {
      return 'egal';
    } else if (hour < 10) {
      return `0${hour}:00 Uhr`;
    } else {
      return `${hour}:00 Uhr`;
    }
  }

  onChange(change: any) {
    if (change.value === this.MIN_TIME) {
      change.value = null;
    }
    this.onSelect.emit(change);
  }
}
