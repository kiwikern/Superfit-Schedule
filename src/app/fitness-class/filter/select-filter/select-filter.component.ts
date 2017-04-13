import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'sfs-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectFilterComponent implements OnChanges, OnInit {

  @Input() title: string;
  @Input() selectedValues: any[];
  @Input() nameMapping;
  allValues: any[];
  @Output() onSelection: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  delete() {
    this.selectedValues = [];
    this.onChange();
  }

  getName(id: any) {
    if (this.nameMapping.hasOwnProperty(id)) {
      return this.nameMapping[id];
    } else {
      return id;
    }
  }

  ngOnInit() {
    this.allValues = Object.keys(this.nameMapping)
      .map((v: any) => Number.parseInt(v) >= 0 ? Number.parseInt(v) : v);
  }

  ngOnChanges() {
    if (!Array.isArray(this.selectedValues)) {
      this.selectedValues = [];
    }
  }

  onChange() {
    this.onSelection.emit(this.selectedValues);
  }

}
