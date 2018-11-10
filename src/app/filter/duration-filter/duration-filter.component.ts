import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sfs-duration-filter',
  templateUrl: './duration-filter.component.html',
  styleUrls: ['./duration-filter.component.css']
})
export class DurationFilterComponent implements OnInit {

  readonly MAX_DURATION = 90;
  @Input() minDuration: number;
  @Input() maxDuration: number;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  public getText() {
    if (this.minDuration && this.maxDuration) {
      return `${this.minDuration} - ${this.maxDuration} Minuten`;
    } else if (this.minDuration) {
      return `Mindestens ${this.minDuration} Minuten`;
    } else if (this.maxDuration) {
      return `Maximal ${this.maxDuration} Minuten`;
    } else {
      return '';
    }
  }

  onChange(change: any) {
    if (change.value === 0) {
      change.value = null;
    }
    this.onSelect.emit(change);
  }

  formatThumbLabel(value: number | null): string {
    if (!value || value === 0) {
      return '';
    } else {
      return value + 'm';
    }
  }

}
