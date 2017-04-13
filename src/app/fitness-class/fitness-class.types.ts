export interface IFitnessClass {
  startTime: Date;
  day: Day;
  duration: number;
  workoutId: string;
  gym: Gym;
}

export interface IFilterState {
  minStartTime?: Date;
  maxStartTime?: Date;
  days?: Day[];
  durations?: number[];
  gyms?: Gym[];
  workouts?: string[];
}

export interface IScheduleState {

}

export enum Day {
  MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

export enum Gym {
  STEGLITZ, STEGLITZ_WOMEN, POTSDAM, CHARLOTTENBURG, FRIEDRICHSHAIN, TEGEL, EUROPACENTER, MITTE, KOEPENICK
}
