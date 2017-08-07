import { SortClassesPipe } from './sort-classes.pipe';
import { FitnessClass } from '../../workout/fitness-class';
import { Day } from '../enums/day.enum';
import { Gym } from '../enums/gym.enum';
import { Language } from '../enums/language.enum';

describe('SortClassesPipe', () => {
  it('create an instance', () => {
    const pipe = new SortClassesPipe();
    expect(pipe).toBeTruthy();
  });

  it('sorts classes', () => {
    const pipe = new SortClassesPipe();
    const testClasses: FitnessClass[] = [
      {
        id: '',
        day: Day.MONDAY,
        startHour: 10,
        startMinute: 0,
        duration: 60,
        workoutId: '',
        type: 'class',
        gym: Gym.CHARLOTTENBURG,
        language: Language.GERMAN
      },
      {
        id: '',
        day: Day.MONDAY,
        startHour: 10,
        startMinute: 0,
        duration: 60,
        workoutId: '',
        type: 'class',
        gym: Gym.CHARLOTTENBURG,
        language: Language.GERMAN
      },
      {
        id: '',
        day: Day.TUESDAY,
        startHour: 10,
        startMinute: 0,
        duration: 60,
        workoutId: '',
        type: 'class',
        gym: Gym.CHARLOTTENBURG,
        language: Language.GERMAN
      },
      {
        id: '',
        day: Day.TUESDAY,
        startHour: 10,
        startMinute: 0,
        duration: 60,
        workoutId: '',
        type: 'class',
        gym: Gym.CHARLOTTENBURG,
        language: Language.GERMAN
      }
    ];
    expect(pipe.transform(testClasses)).toBe(testClasses);
  });
});
