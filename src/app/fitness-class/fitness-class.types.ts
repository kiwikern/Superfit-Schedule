export interface IFitnessClass {
  startTime: Date;
  day: Day;
  duration: number;
  workoutName: string;
  gym: Gym;
}

export enum Day { MONDAY
  // MONDAY = 'monday', TUESDAY = 'tuesday', WEDNESDAY = 'wednesday', THURSDAY = 'thursday',
  // FRIDAY = 'friday', SATURDAY = 'saturday', SUNDAY = 'sunday'
}

export enum Gym {
  STEGLITZ, POTSDAM, CHARLOTTENBURG, FRIEDRICHSHAIN, TEGEL, EUROPACENTER, MITTE, KOEPENIK
}
