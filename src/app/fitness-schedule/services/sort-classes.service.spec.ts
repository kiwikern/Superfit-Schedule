import { SortClassesService } from './sort-classes.service';
import { FitnessClass } from '../interfaces/fitness-class';
import { Day } from '../enums/day.enum';
import { Gym } from '../enums/gym.enum';
import { Language } from '../enums/language.enum';

describe('SortClassesService', () => {
  it('create an instance', () => {
    const pipe = new SortClassesService();
    expect(pipe).toBeTruthy();
  });

  it('sorts classes', () => {
    const pipe = new SortClassesService();
    const testClasses: FitnessClass[] = [
      {
        day: Day.MONDAY,
        startHour: 10,
        startMinute: 0,
        duration: 60,
        workoutId: '',
        gym: Gym.CHARLOTTENBURG,
        language: Language.GERMAN
      },
      {
        day: Day.MONDAY,
        startHour: 10,
        startMinute: 0,
        duration: 60,
        workoutId: '',
        gym: Gym.CHARLOTTENBURG,
        language: Language.GERMAN
      },
      {
        day: Day.TUESDAY,
        startHour: 10,
        startMinute: 0,
        duration: 60,
        workoutId: '',
        gym: Gym.CHARLOTTENBURG,
        language: Language.GERMAN
      },
      {
        day: Day.TUESDAY,
        startHour: 10,
        startMinute: 0,
        duration: 60,
        workoutId: '',
        gym: Gym.CHARLOTTENBURG,
        language: Language.GERMAN
      }
    ];
    expect(pipe.sort(testClasses)).toBe(testClasses);
  });
});
