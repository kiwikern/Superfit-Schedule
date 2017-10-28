import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sfs-time-filter',
  templateUrl: './time-filter.component.html',
  styleUrls: ['./time-filter.component.css']
})
export class TimeFilterComponent implements OnInit {

  readonly MIN_TIME = 5;
  readonly MAX_TIME = 22;
  readonly NO_TIME_SELECTED = 'egal';
  @Input() minStartTime: number;
  @Input() maxEndTime: number;
  @Input() filterOnlyWorkdays: boolean = false;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  getTimeText(hour: number): string {
    if (!hour || hour === this.MIN_TIME) {
      return this.NO_TIME_SELECTED;
    } else if (hour < 10) {
      return `0${hour}:00 Uhr`;
    } else {
      return `${hour}:00 Uhr`;
    }
  }

  public getText() {
    const minTimeText = this.getTimeText(this.minStartTime);
    const maxTimeText = this.getTimeText(this.maxEndTime);
    let text = '';
    if (minTimeText !== this.NO_TIME_SELECTED && maxTimeText !== this.NO_TIME_SELECTED) {
      text = `${minTimeText} - ${maxTimeText}`;
    } else if (minTimeText !== this.NO_TIME_SELECTED) {
      text = `Ab ${minTimeText}`;
    } else if (maxTimeText !== this.NO_TIME_SELECTED) {
      text = `Bis ${maxTimeText}`;
    }

    if (this.filterOnlyWorkdays && text) {
      text += ' (werktags)';
    }

    return text;
  }

  onChange(change: any) {
    if (change.value === this.MIN_TIME) {
      change.value = null;
    }
    this.onSelect.emit(change);
  }
}
