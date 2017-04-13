import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MappingService } from '../services/mapping.service';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/root.types';
import { FilterActions } from '../store/filter.actions';
import { FilterPayload } from '../store/filter.reducers';

@Component({
  selector: 'sfs-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {

  @select(['filter', 'workouts']) readonly workouts$;
  allClasses = this.mappingService.getAllClasses();
  @select(['filter', 'gyms']) readonly gyms$;
  allGyms = this.mappingService.getAllGyms();
  @select(['filter', 'durations']) durations$;

  constructor(private mappingService: MappingService,
              private ngRedux: NgRedux<IAppState>,
              private filterActions: FilterActions) {
  }

  updateClasses(selectedClasses) {
    this.addFilter('workouts', selectedClasses);
  }

  updateGyms(selectedGyms) {
    this.addFilter('gyms', selectedGyms);
  }

  updateDurations(durations) {
    this.addFilter('durations', durations);
  }

  addFilter(filterName: string, value: any) {
    const payload: FilterPayload = {filterName: filterName, filterValue: value};
    if (value && (!Array.isArray(value) || value.length > 0)) {
      this.ngRedux.dispatch(this.filterActions.addFilter(payload));
    } else {
      this.ngRedux.dispatch(this.filterActions.removeFilter(payload))
    }
  }

}
