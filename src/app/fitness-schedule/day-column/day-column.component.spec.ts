import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayColumnComponent } from './day-column.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { MappingService } from '../services/mapping.service';
import { FilterClassesService } from '../services/filter-classes.service';
import { SortClassesService } from '../services/sort-classes.service';

describe('DayColumnComponent', () => {
  let component: DayColumnComponent;
  let fixture: ComponentFixture<DayColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DayColumnComponent,
        MockFitnessClassComponent
      ],
      imports: [
        SfsMaterialModule,
        FlexLayoutModule
      ],
      providers: [
        MappingService,
        {provide: FilterClassesService, useClass: MockPipe},
        {provide: SortClassesService, useClass: MockPipe}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
  selector: 'sfs-fitness-class',
  template: ''
})
class MockFitnessClassComponent {
  @Input() fitnessClass: any;
}

@Pipe({
    name: ''
  }
)
class MockPipe implements PipeTransform {
  transform(obj: any) {
    return obj;
  }
}
