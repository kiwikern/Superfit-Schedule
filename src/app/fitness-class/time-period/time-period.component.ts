import { Component, Input } from '@angular/core';
import {} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'sfs-time-period',
  templateUrl: './time-period.component.html',
  styleUrls: ['./time-period.component.css']
})
export class TimePeriodComponent {

  private readonly TIME_FORMAT = 'HH:mm';
  @Input()
  startTime: Date;
  @Input()
  duration: number;

  getStartTime(): string {
    return moment(this.startTime)
      .format(this.TIME_FORMAT);
  }

  getEndTime(): string {
    return moment(this.startTime)
      .add(this.duration, 'minutes')
      .format(this.TIME_FORMAT);
  }

}
