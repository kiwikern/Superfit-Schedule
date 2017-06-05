import { Day } from '../../enums/day.enum';
import { inject, TestBed } from '@angular/core/testing';
import { ScheduleParserService } from './schedule-parser.service';
describe('ScheduleParserService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduleParserService]
    });
  });

  it('should parse two classes', inject([ScheduleParserService], (service: ScheduleParserService) => {
    const input =  [
          {
            'studio': 'berlin-europa-center-cycle',
            'day': 'wednesday',
            'time': '11:00',
            'course': 'cycle'
          },
          {
            'studio': 'berlin-europa-center-cycle',
            'day': 'wednesday',
            'time': '17:00',
            'course': 'cycle'
          }
        ];
    const courses = service.parse(input);
    const classesOnWednesday = courses[Day.WEDNESDAY].classes;
    expect(classesOnWednesday[0].workoutId).toBe('cycle');
    expect(classesOnWednesday[0].day).toBe(2);
  }));

  it('should parse two days and studios', inject([ScheduleParserService], (service: ScheduleParserService)  => {
    const input = [
          {
            'studio': 'berlin-europa-center-cycle',
            'day': 'wednesday',
            'time': '11:00',
            'course': 'cycle'
          },
          {
            'studio': 'berlin-europa-center-cycle',
            'day': 'wednesday',
            'time': '17:00',
            'course': 'cycle'
          },
          {
            'studio': 'berlin-europa-center-cycle',
            'day': 'monday',
            'time': '09:00',
            'course': 'rpm'
          },
          {
            'studio': 'berlin-europa-center',
            'day': 'monday',
            'time': '08:00',
            'course': 'yoga'
          }
        ];
    const coursesPerDay = service.parse(input);
    const coursesOnMonday = coursesPerDay[Day.MONDAY].classes;
    expect(coursesOnMonday.length).toBe(2);
    const coursesOnWednesday = coursesPerDay[Day.WEDNESDAY].classes;
    expect(coursesOnWednesday.length).toBe(2);
    expect(coursesOnWednesday[1].workoutId).toBe('cycle');
    expect(coursesOnWednesday[1].day).toBe(Day.WEDNESDAY);
  }));

  it('should parse empty json object', inject([ScheduleParserService], (service: ScheduleParserService)  => {
    const input = {};
    const courses = service.parse(input);
    for (const couresPerDay of courses) {
      expect(couresPerDay.classes.length).toBe(0);
    }
  }));

  it('should parse null', inject([ScheduleParserService], (service: ScheduleParserService)  => {
    const input = null;
    const courses = service.parse(input);
    for (const couresPerDay of courses) {
      expect(couresPerDay.classes.length).toBe(0);
    }
  }));


});
