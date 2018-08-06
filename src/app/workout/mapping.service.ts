import {Injectable} from '@angular/core';
import {Gym} from '../fitness-schedule/enums/gym.enum';
import {Day} from '../fitness-schedule/enums/day.enum';

@Injectable()
export class MappingService {

  readonly fitnessClassColorMapping = {
    bodyattack: 'rgba(255, 196, 20, 0.3)',
    bodyattackxp: 'rgba(255, 196, 20, 0.3)',
    bodybalance: 'rgba(193, 255, 112, 0.3)',
    bodybalancexp: 'rgba(193, 255, 112, 0.3)',
    bodyjam: 'rgba(253, 252, 1, 0.3)',
    bodypump: 'rgba(250, 25, 29, 0.3)',
    'BodyPump 45': 'rgba(250, 25, 29, 0.3)',
    bodypumpxp: 'rgba(250, 25, 29, 0.3)',
    bodystep: 'rgba(164, 178, 178, 0.3)',
    bodyvive: 'rgba(183, 172, 255, 0.3)',
    bodyvivexp: 'rgba(183, 172, 255, 0.3)',
    gritplyo: 'rgba(0, 0, 0, 0.3)',
    jumpingfitness: 'rgba(250, 250, 250, 0.3)',
    rpm: 'rgba(1, 108, 152, 0.3)',
    salsation: 'rgba(230, 10, 112, 0.3)',
    shbam: 'rgba(246, 36, 231, 0.3)',
    sprint: 'rgba(1, 108, 152, 0.3)',
    zumba: 'rgba(199, 255, 46, 0.3)'
  };

  colorCounter = 0;
  colors: string[] = ['rgba(116,196,147,1)',
    'rgba(228,191,128,1)', 'rgba(233,215,142,1)',
    'rgba(226,151,93,1)', 'rgba(241,150,112,1)', 'rgba(225,101,82,1)',
    'rgba(201,74,83,1)', 'rgba(190,81,104,1)', 'rgba(163,73,116,1)',
    'rgba(153,55,103,1)', 'rgba(68,124,105,1)',
    'rgba(145,99,182,1)', 'rgba(226,121,163,1)', 'rgba(224,89,139,1)',
    'rgba(124,159,176,1)', 'rgba(86,152,196,1)', 'rgba(154,191,136,1)'];
  dynamicColorMapping = {};

  getGymName(gym: Gym): string {
    if (this.getGymMapping().hasOwnProperty(gym)) {
      return this.getGymMapping()[gym];
    } else {
      return gym + '';
    }
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
    } else if (this.dynamicColorMapping.hasOwnProperty(fitnessClassId)) {
      return this.dynamicColorMapping[fitnessClassId];
    } else {
      const randomColor = this.getRandomColor();
      this.dynamicColorMapping[fitnessClassId] = randomColor;
      return randomColor;
    }
  }

  private getRandomColor() {
    const index = this.colorCounter % this.colors.length;
    this.colorCounter++;
    return this.colors[index];
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
      8: 'Köpenick',
      9: 'Neukölln',
      10: 'Neukölln women'
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
      almistep: 'A LMI Step',
      'Barre': 'Barre',
      bauchxp: 'Bauch Express',
      bbp: 'Bauch Beine Po',
      bodyattack: 'BodyAttack',
      bodyattackxp: 'BodyAttack Express',
      bodybalance: 'BodyBalance',
      bodybalancexp: 'BodyBalance Express',
      bodycombat: 'BodyCombat',
      bodycombatxp: 'BodyCombat Express',
      bodyjam: 'BodyJam',
      bodypump: 'BodyPump',
      'BodyPump 45': 'BodyPump 45',
      bodypumpxp: 'BodyPump Express',
      bodyvive: 'BodyVive',
      bodyvivexp: 'BodyVive Express',
      cycle: 'Cycle',
      'CXWORX': 'CXWORX',
      fatburner: 'Fatburner',
      'Fullbody Cycle': 'Fullbody Cycle',
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
      TwerkOut: 'TwerkOut',
      'TONE': 'TONE',
      'TONE Express': 'TONE Express',
      yoga: 'Yoga',
      yogaxp: 'Yoga Express',
      zumba: 'Zumba',
    };
  }

  getTeamTrainingNameMapping() {
      return {
        'Bungee Fitness': 'Bungee Fitness',
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
        'TRX Mobility': 'TRX Mobility',
        tsm: 'Trainingsstart',
        hiit: 'HIIT',
        functional: 'Functional',
        cellulitekiller: 'Cellulite-Killer',
        team_ruecken: 'Rücken'
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
