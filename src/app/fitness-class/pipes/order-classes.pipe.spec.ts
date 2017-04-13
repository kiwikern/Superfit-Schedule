import { OrderClassesPipe } from './order-classes.pipe';
import { IFitnessClass, Day, Gym } from '../fitness-class.types';

describe('OrderClassesPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderClassesPipe();
    expect(pipe).toBeTruthy();
  });

  it('sorts classes', () => {
    const pipe = new OrderClassesPipe();
    const testClasses: IFitnessClass[] = [
      {day: Day.MONDAY, startTime: new Date(), duration: 60, workoutId: '', gym: Gym.CHARLOTTENBURG},
      {day: Day.MONDAY, startTime: new Date(), duration: 60, workoutId: '', gym: Gym.CHARLOTTENBURG},
      {day: Day.TUESDAY, startTime: new Date(), duration: 60, workoutId: '', gym: Gym.CHARLOTTENBURG},
      {day: Day.TUESDAY, startTime: new Date(), duration: 60, workoutId: '', gym: Gym.CHARLOTTENBURG}
    ];
    expect(pipe.transform(testClasses)).toBe(testClasses);
  })
});
