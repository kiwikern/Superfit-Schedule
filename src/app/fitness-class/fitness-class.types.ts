export interface IFitnessClass {
  startTime: Date;
  day: Day;
  duration: number;
  workoutId: string;
  gym: Gym;
  language: Language;
}

export interface IFilterState {
  minStartTime?: Date;
  maxStartTime?: Date;
  days?: Day[];
  durations?: number[];
  gyms?: Gym[];
  workouts?: string[];
  languages?: Language[];
}

export interface IScheduleState {
  schedule: IFitnessClass[];
  isLoading: boolean;
  error?: any;
}

export enum Language {
  GERMAN, ENGLISH
}


export enum Day {
  MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

export enum Gym {
  STEGLITZ, STEGLITZ_WOMEN, POTSDAM, CHARLOTTENBURG, FRIEDRICHSHAIN, TEGEL, EUROPACENTER, MITTE, KOEPENICK
}
