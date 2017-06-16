import { Injectable } from '@angular/core';
import { Gym } from '../enums/gym.enum';
import { Day } from '../enums/day.enum';
import { Language } from '../enums/language.enum';

@Injectable()
export class MappingService {

  readonly fitnessClassColorMapping = {
    bauchxp: 'rgba(255, 42, 28, 0.3)',
    bbp: 'rgba(255, 42, 28, 0.3)',
    bbp2: 'rgba(255, 42, 28, 0.3)',
    bodyattack: 'rgba(255, 196, 20, 0.3)',
    bodyattackxp: 'rgba(255, 196, 20, 0.3)',
    bodybalance: 'rgba(193, 255, 112, 0.3)',
    bodybalancexp: 'rgba(193, 255, 112, 0.3)',
    bodycombat: 'rgba(255, 42, 28, 0.3)',
    bodycombatxp: 'rgba(255, 42, 28, 0.3)',
    bodyjam: 'rgba(253, 252, 1, 0.3)',
    bodypump: 'rgba(250, 25, 29, 0.3)',
    bodypumpxp: 'rgba(250, 25, 29, 0.3)',
    bodystep: 'rgba(164, 178, 178, 0.3)',
    bodyvive: 'rgba(183, 172, 255, 0.3)',
    bodyvivexp: 'rgba(183, 172, 255, 0.3)',
    cycle: 'rgba(255, 42, 28, 0.3)',
    fatburner: 'rgba(255, 42, 28, 0.3)',
    gritplyo: 'rgba(0, 0, 0, 0.3)',
    jumpingfitness: 'rgba(250, 250, 250, 0.3)',
    lmistep: 'rgba(247, 0, 0, 0.3)',
    lmistepxp: 'rgba(247, 0, 0, 0.3)',
    pilates: 'rgba(255, 42, 28, 0.3)',
    rpm: 'rgba(1, 108, 152, 0.3)',
    ruecken: 'rgba(255, 42, 28, 0.3)',
    salsation: 'rgba(230, 10, 112, 0.3)',
    shbam: 'rgba(246, 36, 231, 0.3)',
    sprint: 'rgba(1, 108, 152, 0.3)',
    strong: 'rgba(255, 42, 28, 0.3)',
    yoga: 'rgba(255, 42, 28, 0.3)',
    yogaxp: 'rgba(255, 42, 28, 0.3)',
    zumba: 'rgba(199, 255, 46, 0.3)'
  };

  getGymName(gym: Gym): string {
    return this.getGymMapping()[gym];
  }

  getClassName(fitnessClassId) {
    if (this.getWorkoutsNameMapping().hasOwnProperty(fitnessClassId)) {
      return this.getWorkoutsNameMapping()[fitnessClassId];
    } else {
      return fitnessClassId;
    }
  }

  getClassColor(fitnessClassId) {
    if (this.fitnessClassColorMapping.hasOwnProperty(fitnessClassId)) {
      return this.fitnessClassColorMapping[fitnessClassId];
    } else {
      return '#FFFFFF';
    }
  }

  getDayName(day: Day) {
    return this.getDayMapping()[day];
  }

  getGymMapping() {
    return {
      0: 'Steglitz',
      1: 'Steglitz women',
      2: 'Potsdam',
      3: 'Charlottenburg',
      4: 'Friedrichshain',
      5: 'Tegel',
      6: 'Europacenter',
      7: 'Mitte',
      8: 'Köpenick'
    };
  }

  getDayMapping() {
    return {
      0: 'Montag',
      1: 'Dienstag',
      2: 'Mittwoch',
      3: 'Donnerstag',
      4: 'Freitag',
      5: 'Samstag',
      6: 'Sonntag'
    };
  }

  getDurationMapping() {
    return {
      30: '30 Minuten',
      60: '60 Minuten',
      90: '90 Minuten'
    };
  }

  getLanguageMapping() {
    return {
      0: 'Deutsch',
      1: 'Englisch'
    };
  }

  getWorkoutsNameMapping() {
  return Object.assign({}, this.getFitnessClassNameMapping(), this.getTeamTrainingNameMapping());
}

  getFitnessClassNameMapping() {
    return {
      bauchxp: 'Bauch Express',
      bbp: 'Bauch Beine Po',
      bbp2: 'Bauch Beine Po 2',
      bodyattack: 'BodyAttack',
      bodyattackxp: 'BodyAttack Express',
      bodybalance: 'BodyBalance',
      bodybalancexp: 'BodyBalance Express',
      bodycombat: 'BodyCombat',
      bodycombatxp: 'BodyCombat Express',
      bodyjam: 'BodyJam',
      bodypump: 'BodyPump',
      bodypumpxp: 'BodyPump Express',
      bodystep: 'BodyStep',
      bodyvive: 'BodyVive',
      bodyvivexp: 'BodyVive Express',
      cycle: 'Cycle',
      fatburner: 'Fatburner',
      gritplyo: 'GRIT PLYO',
      jumpingfitness: 'Jumping Fitness',
      lmistep: 'LMI Step',
      lmistepxp: 'LMI Step Express',
      pilates: 'Pilates',
      rpm: 'RPM',
      ruecken: 'Rücken',
      salsation: 'Salsation',
      shbam: 'Sh\'Bam',
      sprint: 'Sprint',
      strong: 'Strong by Zumba',
      yoga: 'Yoga',
      yogaxp: 'Yoga Express',
      zumba: 'Zumba',
    };
  }

  getTeamTrainingNameMapping() {
      return {
      circuit: 'Circuit',
      po: 'Po',
      qxstrong: 'Queenax Strong',
      trx: 'TRX',
      stretch: 'Stretch',
      tt_skilletic: 'Skilletic',
      qxburn: 'Queenax Burn',
      bauch: 'Bauch',
      qxcardio: 'Queenax Cardio',
      faszientraining: 'Faszientraining',
      fullbodyworkout: 'Full Body Workout',
      trxbauch: 'TRX Bauch',
      tsm: 'Trainingsstart',
      hiit: 'HIIT',
      functional: 'Functional',
      cellulitekiller: 'Cellulite-Killer',
      tsw: 'Rücken'
    };
  }

  getWorkoutType(type: string) {
    if (type === 'class') {
      return 'Kurs';
    } else {
      return 'Teamtraining';
    }
  }

}
