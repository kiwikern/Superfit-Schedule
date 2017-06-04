import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayColumnComponent } from './day-column.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Component, Input } from '@angular/core';
import { MappingService } from '../services/mapping.service';
import { SortClassesPipe } from '../pipes/sort-classes.pipe';

describe('DayColumnComponent', () => {
  let component: DayColumnComponent;
  let fixture: ComponentFixture<DayColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DayColumnComponent,
        MockFitnessClassComponent,
        SortClassesPipe
      ],
      imports: [
        SfsMaterialModule,
        FlexLayoutModule
      ],
      providers: [
        MappingService
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
  @Input() fitnessClass;
  @Input() wasRemoved;
}

class MockService {
  filter(obj) {
    return obj;
  }

  sort(obj) {
    return obj;
  }
}
