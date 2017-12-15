import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { MappingService } from '../../workout/mapping.service';
import { FilterService } from '../../filter/filter.service';

@Component({
  selector: 'sfs-gymselection',
  templateUrl: './gymselection.component.html',
  styleUrls: ['./gymselection.component.css']
})
export class GymselectionComponent implements OnInit {

  @select() readonly filter$;
  gymMapping = this.mappingService.getGymMapping();

  constructor(private mappingService: MappingService,
              public filterService: FilterService) {
  }

  ngOnInit() {
  }


}
