import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredScheduleComponent } from './filtered-schedule.component';

describe('FilteredScheduleComponent', () => {
  let component: FilteredScheduleComponent;
  let fixture: ComponentFixture<FilteredScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredScheduleComponent ]
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
