import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSelectionComponent } from './class-selection.component';
import { Component, Input } from '@angular/core';
import { MappingService } from '../../workout/mapping.service';
import { FilterService } from '../../filter/filter.service';

describe('ClassSelectionComponent', () => {
  let component: ClassSelectionComponent;
  let fixture: ComponentFixture<ClassSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClassSelectionComponent,
        MockSelectFilterComponent
      ],
      providers: [
        MappingService,
        {provide: FilterService, useClass: MockFilterService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  'selector': 'sfs-select-filter',
  'template': ''
})
class MockSelectFilterComponent {
  @Input() selectedValues;
  @Input() nameMapping;
}

class MockFilterService {
}
