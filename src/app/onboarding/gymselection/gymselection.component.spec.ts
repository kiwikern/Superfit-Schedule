import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymselectionComponent } from './gymselection.component';
import { Component, Input } from '@angular/core';
import { MappingService } from '../../workout/mapping.service';
import { FilterService } from '../../filter/filter.service';

describe('GymselectionComponent', () => {
  let component: GymselectionComponent;
  let fixture: ComponentFixture<GymselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GymselectionComponent,
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
    fixture = TestBed.createComponent(GymselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
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
