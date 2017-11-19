import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sfs-link-dots',
  templateUrl: './link-dots.component.html',
  styleUrls: ['./link-dots.component.css']
})
export class LinkDotsComponent {

  @Input() dotsCount: number;
  @Input() activeIndex = 0;
  @Output() onIndexChange: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

}
