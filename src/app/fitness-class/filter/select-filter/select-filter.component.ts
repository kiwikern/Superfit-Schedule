import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MappingService } from '../../services/mapping.service';

@Component({
  selector: 'sfs-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectFilterComponent {

  @Input() allValues: any[] = [];
  @Input() title: string;
  @Input() selectedValues: any[] = [];
  @Output() onSelection: EventEmitter<any> = new EventEmitter<any>();

  constructor(private mappingService: MappingService) { }

  getName(id: any) {
    if (typeof id === 'string') {
      return this.mappingService.getClassName(id);
    } else {
      return this.mappingService.getGymName(id);
    }
  }

  onChange() {
    this.onSelection.emit(this.selectedValues);
  }

}
