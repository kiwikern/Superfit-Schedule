import { Injectable } from '@angular/core';
import { Gym, Day } from '../fitness-class.types';

@Injectable()
export class MappingService {

  getGymName(gym: Gym): string {
    switch(gym) {
      case Gym.EUROPACENTER: return 'Europacenter';
      case Gym.FRIEDRICHSHAIN: return 'Friedrichshain';
      case Gym.KOEPENICK: return 'Köpenick';
      case Gym.STEGLITZ: return 'Steglitz';
      case Gym.CHARLOTTENBURG: return 'Charlottenburg';
      case Gym.POTSDAM: return 'Potsdam';
      case Gym.TEGEL: return 'Tegel';
      case Gym.MITTE: return 'Mitte';
      case Gym.STEGLITZ_WOMEN: return 'Steglitz Women';
    }
    return 'Translation missing for gym: ' + gym;
  }

  getClassName(fitnessClassId) {
    if (this.fitnessClassMapping.hasOwnProperty(fitnessClassId)) {
      return this.fitnessClassMapping[fitnessClassId].name;
    } else {
      return fitnessClassId;
    }
  }

  getClassColor(fitnessClassId) {
    if (this.fitnessClassMapping.hasOwnProperty(fitnessClassId)) {
      return this.fitnessClassMapping[fitnessClassId].color;
    } else {
      return '#FFFFFF';
    }
  }

  getDayName(day: Day) {
    switch (day) {
      case Day.MONDAY: return 'Montag';
      case Day.TUESDAY: return 'Dienstag';
      case Day.WEDNESDAY: return 'Mittwoch';
      case Day.THURSDAY: return 'Donnerstag';
      case Day.FRIDAY: return 'Freitag';
      case Day.SATURDAY: return 'Samstag';
      case Day.SUNDAY: return 'Sonntag';
    }
  }

  getAllClasses() {
    return Object.keys(this.fitnessClassMapping)
  }

  getAllGyms() {
    return Object.keys(Gym)
      .filter(key => typeof Gym[key] === 'string')
      .map(key => Number.parseInt(key));
  }

  readonly fitnessClassMapping = {
  'bauchxp': {name: 'Bauch Express', color: 'rgba(255, 42, 28, 0.3)'},
  'bbp': {name: 'Bauch Beine Po', color: 'rgba(255, 42, 28, 0.3)'},
  'bbp2': {name: 'Bauch Beine Po 2', color: 'rgba(255, 42, 28, 0.3)'},
  'bodyattack': {name: 'BodyAttack', color: 'rgba(255, 196, 20, 0.3)'},
  'bodyattackxp': {name: 'BodyAttack Express', color: 'rgba(255, 196, 20, 0.3)'},
  'bodybalance': {name: 'BodyBalance', color: 'rgba(193, 255, 112, 0.3)'},
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
  'yogaxp': {name: 'Yoga Express', color: 'rgba(255, 42, 28, 0.3)'},
  'zumba': {name: 'Zumba', color: 'rgba(199, 255, 46, 0.3)'}
};
}
