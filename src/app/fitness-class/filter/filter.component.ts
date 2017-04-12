import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MappingService } from '../services/mapping.service';
import { NgRedux, select } from '@angular-redux/store';
import { Gym, IFitnessClass } from '../fitness-class.types';
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
  selectedClasses: IFitnessClass[] = [];
  @select(['filter', 'gyms']) readonly gyms$;
  allGyms = this.mappingService.getAllGyms();
  selectedGyms: Gym[] = [];
  minStartTime = 30;
  maxStartTime = 90;

  constructor(private mappingService: MappingService,
              private ngRedux: NgRedux<IAppState>,
              private filterActions: FilterActions) {
    this.workouts$.subscribe(w => w ? this.selectedClasses = w : this.selectedClasses = []);
    this.gyms$.subscribe(g => g ? this.selectedGyms = g : this.selectedGyms = []);
  }

  updateClasses(selectedClasses) {
    this.addFilter('workouts', selectedClasses);
  }

  updateGyms(selectedGyms) {
    this.addFilter('gyms', selectedGyms);
  }

  addFilter(filterName: string, value: any) {
    const payload: FilterPayload = {filterName: filterName, filterValue: value};
    if (value && value.length > 0) {
      this.ngRedux.dispatch(this.filterActions.addFilter(payload));
    } else {
      this.ngRedux.dispatch(this.filterActions.removeFilter(payload))
    }
  }

}
