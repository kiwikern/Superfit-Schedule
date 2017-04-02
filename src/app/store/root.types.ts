/**
 * Created by Kim on 02.04.2017.
 */
export interface IAppState {
  schedule: IFitnessClass[];
  isLoading: boolean;
  error: null;
}

export interface IFitnessClass {
  startTime: Date;
  day: Day;
  duration: number;
  workoutName: string;
  gym: Gym;
}

export enum Day {
  MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

export enum Gym {
  STEGLITZ, POTSDAM, CHARLOTTENBURG, FRIEDRICHSHAIN, TEGEL, EUROPACENTER, MITTE, KOEPENIK
}
