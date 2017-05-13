import { OrderClassesPipe } from './order-classes.pipe';
import { FitnessClass } from '../interfaces/fitness-class';
import { Day } from '../enums/day.enum';
import { Gym } from '../enums/gym.enum';
import { Language } from '../enums/language.enum';

describe('OrderClassesPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderClassesPipe();
    expect(pipe).toBeTruthy();
  });

  it('sorts classes', () => {
    const pipe = new OrderClassesPipe();
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
    expect(pipe.transform(testClasses)).toBe(testClasses);
  });
});
