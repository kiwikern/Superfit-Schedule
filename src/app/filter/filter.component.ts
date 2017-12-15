import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MappingService } from '../workout/mapping.service';
import { select } from '@angular-redux/store';
import { FilterService } from './filter.service';

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
              public filterService: FilterService) {
  }

}
