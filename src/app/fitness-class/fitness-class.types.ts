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

export let fitnessClassMapping = {
  'bauchxp': {name: 'Bauch Express', color: 'rgba(255, 42, 28, 0.3)'},
  'bbp': {name: 'Bauch Beine Po', color: 'rgba(255, 42, 28, 0.3)'},
  'bbp2': {name: 'Bauch Beine Po2', color: 'rgba(255, 42, 28, 0.3)'},
  'bodyattack': {name: 'BodyAttack', color: 'rgba(255, 196, 20, 0.3)'},
  'bodyattack-e': {name: 'BodyAttack (E)', color: 'rgba(255, 196, 20, 0.3)'},
  'bodyattackxp': {name: 'BodyAttack Express', color: 'rgba(255, 196, 20, 0.3)'},
  'bodybalance': {name: 'BodyBalance', color: 'rgba(193, 255, 112, 0.3)'},
  'bodybalance-e': {name: 'BodyBalance (E)', color: 'rgba(193, 255, 112, 0.3)'},
  'bodybalancexp': {name: 'BodyBalance Express', color: 'rgba(193, 255, 112, 0.3)'},
  'bodycombat': {name: 'BodyCombat', color: 'rgba(255, 42, 28, 0.3)'},
  'bodycombatxp': {name: 'BodyCombat Express', color: 'rgba(255, 42, 28, 0.3)'},
  'bodyjam': {name: 'BodyJam', color: 'rgba(253, 252, 1, 0.3)'},
  'bodypump': {name: 'BodyPump', color: 'rgba(250, 25, 29, 0.3)'},
  'bodypump-e': {name: 'BodyPump (E)', color: 'rgba(250, 25, 29, 0.3)'},
  'bodypumpxp': {name: 'BodyPump Express', color: 'rgba(250, 25, 29, 0.3)'},
  'bodystep': {name: 'BodyStep', color: 'rgba(164, 178, 178, 0.3)'},
  'bodyvive': {name: 'BodyVive', color: 'rgba(183, 172, 255, 0.3)'},
  'bodyvivexp': {name: 'BodyVive Express', color: 'rgba(183, 172, 255, 0.3)'},
  'cycle': {name: 'Cycle', color: 'rgba(255, 42, 28, 0.3)'},
  'fatburner': {name: 'Fatburner', color: 'rgba(255, 42, 28, 0.3)'},
  'gritplyo': {name: 'GRIT PLYO', color: 'rgba(0, 0, 0, 0.3)'},
  'jumpingfitness': {name: 'Jumping Fitness', color: 'rgba(250, 250, 250, 0.3)'},
  'lmistep': {name: 'LMI Step', color: 'rgba(247, 0, 0, 0.3)'},
  'lmistepxp': {name: 'LMI Step Express', color: 'rgba(247, 0, 0, 0.3)'},
  'pilates': {name: 'Pilates', color: 'rgba(255, 42, 28, 0.3)'},
  'rpm': {name: 'RPM', color: 'rgba(1, 108, 152, 0.3)'},
  'ruecken': {name: 'Rücken', color: 'rgba(255, 42, 28, 0.3)'},
  'salsation': {name: 'Salsation', color: 'rgba(230, 10, 112, 0.3)'},
  'shbam': {name: 'Sh\'Bam', color: 'rgba(246, 36, 231, 0.3)'},
  'sprint': {name: 'Sprint', color: 'rgba(1, 108, 152, 0.3)'},
  'strong': {name: 'Strong by Zumba', color: 'rgba(255, 42, 28, 0.3)'},
  'yoga': {name: 'Yoga', color: 'rgba(255, 42, 28, 0.3)'},
  'yoga-e': {name: 'Yoga English', color: 'rgba(255, 42, 28, 0.3)'},
  'yogaxp': {name: 'Yoga Express', color: 'rgba(255, 42, 28, 0.3)'},
  'zumba': {name: 'Zumba', color: 'rgba(199, 255, 46, 0.3)'}
};
