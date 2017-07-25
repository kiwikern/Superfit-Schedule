import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sfs-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() scaleSize = 5;
  @Input() selectedIcon: string;
  @Input() unselectedIcon: string;
  @Input() color = '';
  @Input() title: string;
  @Output() change: EventEmitter<number> = new EventEmitter();
  values: number[];
  selectedValue: number;

  constructor() {
  }

  ngOnInit() {
    this.values = Array(this.scaleSize).fill(0).map((_, index) => index + 1);
  }

  onChange(value: number) {
    this.selectedValue = value;
    this.change.emit(value);
  }

}
