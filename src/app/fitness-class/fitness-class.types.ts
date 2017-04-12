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
  minDuration?: number;
  maxDuration?: number;
  gyms?: Gym[];
}

export interface IScheduleState {

}

export enum Day {
  MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

export enum Gym {
  STEGLITZ, POTSDAM, CHARLOTTENBURG, FRIEDRICHSHAIN, TEGEL, EUROPACENTER, MITTE, KOEPENIK
}
