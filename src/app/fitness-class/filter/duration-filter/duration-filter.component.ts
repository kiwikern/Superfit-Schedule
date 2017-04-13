import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sfs-duration-filter',
  templateUrl: './duration-filter.component.html',
  styleUrls: ['./duration-filter.component.css']
})
export class DurationFilterComponent {

  @Input() minDuration = 30;
  @Input() maxDuration = 90;
  @Output() onMinDurationChange = new EventEmitter<number>();
  @Output() onMaxDurationChange = new EventEmitter<number>();

  constructor() { }

  changeMinStartTime() {
    this.onMinDurationChange.emit(this.minDuration);
  }

  changeMaxStartTime() {
    this.onMaxDurationChange.emit(this.maxDuration);
  }

}
