import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'sfs-time-period',
  templateUrl: './time-period.component.html',
  styleUrls: ['./time-period.component.css']
})
export class TimePeriodComponent {

  private readonly TIME_FORMAT = 'HH:mm';
  @Input() startHour: number;
  @Input() startMinute: number;
  @Input() duration: number;


  getEndTime(): string {
    return moment()
      .hour(this.startHour)
      .minute(this.startMinute)
      .add(this.duration, 'minutes')
      .format(this.TIME_FORMAT);
  }

}
