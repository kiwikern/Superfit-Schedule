import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../filter/filter.service';
import { MappingService } from '../../workout/mapping.service';
import { select } from '@angular-redux/store';

@Component({
  selector: 'sfs-class-selection',
  templateUrl: './class-selection.component.html',
  styleUrls: ['./class-selection.component.css']
})
export class ClassSelectionComponent implements OnInit {

  @select() readonly filter$;
  classMapping = this.mappingService.getFitnessClassNameMapping();
  teamTrainingMapping = this.mappingService.getTeamTrainingNameMapping();

  constructor(private mappingService: MappingService,
              public filterService: FilterService) {
  }

  ngOnInit() {
  }

}
