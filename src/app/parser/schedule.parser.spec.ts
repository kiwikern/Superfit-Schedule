import { parse } from './schedule.parser';
import { Day } from '../fitness-class/enums/day.enum';
describe('ScheduleParser', () => {

  it('should parse two classes', () => {
    const input = {
      'berlin-europa-center-cycle': {
        'wednesday': [
          {
            'time': '11:00',
            'course': 'cycle'
          },
          {
            'time': '17:00',
            'course': 'cycle'
          }
        ]
      }
    };
    const courses = parse(input);
    const classesOnWednesday = courses[Day.WEDNESDAY].classes;
    expect(classesOnWednesday[0].workoutId).toBe('cycle');
    expect(classesOnWednesday[0].day).toBe(2);
  });

  it('should parse two days and studios', () => {
    const input = {
      'berlin-europa-center-cycle': {
        'wednesday': [
          {
            'time': '11:00',
            'course': 'cycle'
          },
          {
            'time': '17:00',
            'course': 'cycle'
          }
        ],
        'monday': [
          {
            'time': '09:00',
            'course': 'rpm'
          }
        ]
      },
      'berlin-europa-center': {
        'monday': [
          {
            'time': '08:00',
            'course': 'yoga'
          }
        ]
      }
    };
    const coursesPerDay = parse(input);
    console.dir(coursesPerDay);
    const coursesOnMonday = coursesPerDay[Day.MONDAY].classes;
    expect(coursesOnMonday.length).toBe(2);
    const coursesOnWednesday = coursesPerDay[Day.WEDNESDAY].classes;
    expect(coursesOnWednesday.length).toBe(2);
    expect(coursesOnWednesday[1].workoutId).toBe('cycle');
    expect(coursesOnWednesday[1].day).toBe(Day.WEDNESDAY);
  });

  it('should parse empty json object', () => {
    const input = {};
    const courses = parse(input);
    for (let couresPerDay of courses) {
      expect(couresPerDay.classes.length).toBe(0);
    }
  });

  it('should parse null', () => {
    const input = null;
    const courses = parse(input);
    for (let couresPerDay of courses) {
      expect(couresPerDay.classes.length).toBe(0);
    }
  });


});
