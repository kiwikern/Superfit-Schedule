import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredScheduleComponent } from './filtered-schedule.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Component, Input } from '@angular/core';

describe('FilteredScheduleComponent', () => {
  let component: FilteredScheduleComponent;
  let fixture: ComponentFixture<FilteredScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilteredScheduleComponent,
        MockClassListComponent
      ],
      imports: [
        SfsMaterialModule,
        FlexLayoutModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
  selector: 'sfs-schedule',
  template: ''
})
class MockClassListComponent {

  @Input() schedulePerDay;
  @Input() filter;
  @Input() showSchedule;

}
