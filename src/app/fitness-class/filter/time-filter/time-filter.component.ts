import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sfs-time-filter',
  templateUrl: './time-filter.component.html',
  styleUrls: ['./time-filter.component.css']
})
export class TimeFilterComponent implements OnInit {

  @Input() minStartTime: number;
  @Input() maxEndTime: number;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  getTimeText(hour: number): string {
    if (!hour || hour === 0) {
      return 'egal';
    } else if (hour < 10) {
      return `0${hour}:00 Uhr`;
    } else {
      return `${hour}:00 Uhr`;
    }
  }

  onChange(change: any) {
    if (change.value === 0) {
      change.value = null;
    }
    this.onSelect.emit(change);
  }
}
