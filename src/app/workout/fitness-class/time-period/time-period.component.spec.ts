import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePeriodComponent } from './time-period.component';

describe('TimePeriodComponent', () => {
  let component: TimePeriodComponent;
  let fixture: ComponentFixture<TimePeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePeriodComponent);
    component = fixture.componentInstance;
    component.startHour = 10;
    component.startMinute = 0;
    component.duration = 60;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display start time', () => {
    const expectedStartTime = '10:00';
    expect(component.getStartTime()).toBe(expectedStartTime);
  });

  it('should display end time', () => {
    const expectedEndTime = '11:00';
    expect(component.getEndTime()).toBe(expectedEndTime);
  });

});
