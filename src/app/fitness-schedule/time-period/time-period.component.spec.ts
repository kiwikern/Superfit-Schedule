import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePeriodComponent } from './time-period.component';
import moment = require('moment');
// import * as moment from 'moment';

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
    const expectedStartTime = moment()
      .hour(10)
      .minute(0)
      .format('HH:mm');
    expect(component.getStartTime()).toBe(expectedStartTime);
  });

  it('should display end time', () => {
    const expectedEndTime = moment()
      .hour(11)
      .minute(0)
      .format('HH:mm');
    expect(component.getEndTime()).toBe(expectedEndTime);
  });

});
