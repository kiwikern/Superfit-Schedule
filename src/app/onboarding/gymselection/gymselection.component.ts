import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';

@Component({
  selector: 'sfs-gymselection',
  templateUrl: './gymselection.component.html',
  styleUrls: ['./gymselection.component.css']
})
export class GymselectionComponent implements OnInit {

  @select() readonly filter$;

  // constructor(private mappingService: MappingService) {
  // }

  ngOnInit() {
  }

  addFilter(filterName: string, value: any) {

  }

}
