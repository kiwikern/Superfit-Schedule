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
  classMapping = this.mappingService.getFitnessClassNameMapping();
  @select(['filter', 'gyms']) readonly gyms$;
  allGyms = this.mappingService.getAllGyms();
  gymMapping = this.mappingService.getGymMapping();
  @select(['filter', 'durations']) durations$;
  durationMapping = this.mappingService.getDurationMapping();
  @select(['filter', 'languages']) languages$;
  allLanguages = this.mappingService.getAllLanguages();
  languageMapping = this.mappingService.getLanguageMapping();
  showFilter = true;

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

  updateLanguages(languages) {
    this.addFilter('languages', languages);
  }

  addFilter(filterName: string, value: any) {
    const payload: FilterPayload = {filterName: filterName, filterValue: value};
    if (value && (!Array.isArray(value) || value.length > 0)) {
      this.ngRedux.dispatch(this.filterActions.addFilter(payload));
    } else {
      this.ngRedux.dispatch(this.filterActions.removeFilter(payload));
    }
  }

}
