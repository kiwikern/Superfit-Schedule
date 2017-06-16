import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MappingService } from '../services/mapping.service';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/root-state.interface';
import { FilterActions } from '../store/filter/filter.actions';
import { FilterPayload } from '../store/filter/filter.reducers';

@Component({
  selector: 'sfs-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {

  @select(['filter', 'workouts']) readonly workouts$;
  classMapping = this.mappingService.getFitnessClassNameMapping();
  @select(['filter', 'teamTrainings']) readonly teamTrainings$;
  teamTrainingMapping = this.mappingService.getTeamTrainingNameMapping();
  @select(['filter', 'gyms']) readonly gyms$;
  gymMapping = this.mappingService.getGymMapping();
  @select(['filter', 'durations']) durations$;
  durationMapping = this.mappingService.getDurationMapping();
  @select(['filter', 'languages']) languages$;
  languageMapping = this.mappingService.getLanguageMapping();
  @select(['filter', 'minStartTime']) minStartTime$;
  @select(['filter', 'maxEndTime']) maxEndTime$;

  constructor(private mappingService: MappingService,
              private ngRedux: NgRedux<IAppState>,
              private filterActions: FilterActions) {
  }

  updateClasses(selectedClasses) {
    this.addFilter('workouts', selectedClasses);
  }

  updateTeamtrainings(selectedTeamTrainings) {
    this.addFilter('teamTrainings', selectedTeamTrainings);
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
