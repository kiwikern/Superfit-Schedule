import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MappingService } from '../workout/mapping.service';
import { select } from '@angular-redux/store';
import { FilterActions } from '../fitness-schedule/store/filter/filter.actions';
import { FilterPayload } from '../fitness-schedule/store/filter/filter-payload';

@Component({
  selector: 'sfs-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {

  @select() readonly filter$;
  classMapping = this.mappingService.getFitnessClassNameMapping();
  teamTrainingMapping = this.mappingService.getTeamTrainingNameMapping();
  gymMapping = this.mappingService.getGymMapping();

  constructor(private mappingService: MappingService,
              private filterActions: FilterActions) {
  }

  addFilter(filterName: string, value: any) {
    const payload: FilterPayload = {filterName: filterName, filterValue: value};
    if (value && (!Array.isArray(value) || value.length > 0)) {
      this.filterActions.addFilter(payload);
    } else {
      this.filterActions.removeFilter(payload);
    }
  }

}
