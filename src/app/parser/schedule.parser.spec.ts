import { parse } from './schedule.parser';
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
    expect(courses.length).toBe(2);
    expect(courses[0].workoutId).toBe('cycle');
    expect(courses[0].day).toBe(2);
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
    const courses = parse(input);
    expect(courses.length).toBe(4);
    expect(courses[3].workoutId).toBe('yoga');
    expect(courses[3].day).toBe(0);
  });

  it('should parse empty json object', () => {
    const input = {};
    const courses = parse(input);
    expect(courses.length).toBe(0);
  });

  it('should parse empty json string', () => {
    const input = null;
    const courses = parse(input);
    expect(courses.length).toBe(0);
  });


});
