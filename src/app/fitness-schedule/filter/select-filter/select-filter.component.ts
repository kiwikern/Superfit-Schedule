import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sfs-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectFilterComponent implements OnChanges, OnInit {

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

  /**
   * Returns a string representation of the selected values.
   */
  public getSelectionText() {
    return this.selectedValues
      .map(v => this.nameMapping[v])
      .join(', ');
  }

  ngOnInit() {
    this.allValues = Object.keys(this.nameMapping)
      .sort((a, b) => this.getName(a).localeCompare(this.getName(b)))
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

  remove(value: string): void {
    const index = this.selectedValues.indexOf(value);

    if (index >= 0) {
      this.selectedValues = this.selectedValues.slice();
      this.selectedValues.splice(index, 1);
      this.onChange();
    }
  }

}
