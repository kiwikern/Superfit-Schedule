import { FilterClassesPipe } from './filter-classes.pipe';
import { FitnessClass } from '../interfaces/fitness-class';
import { Day } from '../enums/day.enum';
import { Gym } from '../enums/gym.enum';
import { Language } from '../enums/language.enum';
import { FilterState } from '../store/filter/filter-state';
import { FitnessClassesPerDay } from '../interfaces/fitness-classes-per-day';

describe('FilterClassesPipe', () => {
  const testClasses: FitnessClassesPerDay[] = [
    {
      day: Day.MONDAY,
      classes: [
        {
          day: Day.MONDAY,
          startHour: 8,
          startMinute: 0,
          duration: 60,
          workoutId: '0',
          gym: Gym.CHARLOTTENBURG,
          language: Language.GERMAN
        },
        {
          day: Day.MONDAY,
          startHour: 10,
          startMinute: 0,
          duration: 60,
          workoutId: '1',
          gym: Gym.CHARLOTTENBURG,
          language: Language.GERMAN
        }]
    },
    {
      day: Day.TUESDAY,
      classes: [
        {
          day: Day.TUESDAY,
          startHour: 11,
          startMinute: 0,
          duration: 60,
          workoutId: '2',
          gym: Gym.CHARLOTTENBURG,
          language: Language.GERMAN
        },
        {
          day: Day.TUESDAY,
          startHour: 11,
          startMinute: 30,
          duration: 60,
          workoutId: '3',
          gym: Gym.CHARLOTTENBURG,
          language: Language.GERMAN
        },
        {
          day: Day.TUESDAY,
          startHour: 14,
          startMinute: 0,
          duration: 60,
          workoutId: '4',
          gym: Gym.CHARLOTTENBURG,
          language: Language.GERMAN
        }]
    }
  ];

  it('should create an instance', () => {
    const pipe = new FilterClassesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter by time', () => {
    const pipe = new FilterClassesPipe();
    const filter: FilterState = {
      minStartTime: 10,
      maxEndTime: 12
    };
    const result = pipe.transform(testClasses, filter);
    expect(result.length).toEqual(2);
    expect(result[0].classes[0].workoutId).toEqual('1');
    expect(result[1].classes[0].workoutId).toEqual('2');
  });
});
