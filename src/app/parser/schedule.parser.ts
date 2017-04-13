import * as moment from 'moment';
import { IFitnessClass, Day, Gym } from '../fitness-class/fitness-class.types';

export function parse(json: string) {
  let classes: IFitnessClass[] = [];
  let scheduleJSON;
  try {
    scheduleJSON = JSON.parse(json);
  } catch (error) {
    console.log(error);
    scheduleJSON = {};
  }
  for (const gym in scheduleJSON) {
    if (!scheduleJSON.hasOwnProperty(gym)) {
      continue;
    }
    const gymJSON = scheduleJSON[gym];
    const classesPerGym = getClassesPerGym(gymJSON, gym);
    classes = classes.concat(classesPerGym);
  }
  return classes;
}

function getClassesPerGym(gymJSON: any, gym): IFitnessClass[] {
  let classes: IFitnessClass[] = [];
  for (const day in gymJSON) {
    if (!gymJSON.hasOwnProperty(day)) {
      continue;
    }
    const dayJSON = gymJSON[day];
    const classesPerDay = getClassesPerDay(dayJSON, day, gym);
    classes = classes.concat(classesPerDay);
  }
  return classes;
}

function getClassesPerDay(dayJSON: any, day, gym): IFitnessClass[] {
  const classes: IFitnessClass[] = [];
  for (const course of dayJSON) {
    const fitnessClass: IFitnessClass = {
      startTime: moment(course.time + '', 'HH:mm').toDate(),
      day: DayMapping[day],
      duration: getClassDuration(course.course),
      workoutId: course.course,
      gym: GymMapping[gym]
    };
    classes.push(fitnessClass);
  }
  return classes;
}

function getAllClassesByDay(classes: IFitnessClass[]) {
  const result = {};
  const days = Object.keys(Day)
    .filter(key => typeof Day[key] === 'string')
    .map(key => Number.parseInt(key));
  for (const day of days) {
    result[day] = classes.filter(c => c.day === day);
  }
  return result;
}

function getClassDuration(className: string) {
  if (className.includes('yogaxp')) {
    return 60
  } else if (className.includes('xp') || className.includes('lmi') || className.includes('sprint')) {
    return 30
  } else if (className.includes('yoga')) {
    return 90
  } else {
    return 60
  }
}

const GymMapping = {
  'berlin-europa-center-cycle': Gym.EUROPACENTER,
  'berlin-europa-center': Gym.EUROPACENTER,
  'berlin-steglitz': Gym.STEGLITZ,
  'berlin-steglitz-women': Gym.STEGLITZ_WOMEN,
  'berlin-mitte': Gym.MITTE,
  'berlin-charlottenburg': Gym.CHARLOTTENBURG,
  'berlin-tegel': Gym.TEGEL,
  'brandenburg-potsdam': Gym.POTSDAM,
  'berlin-koepenick': Gym.KOEPENICK,
  'berlin-friedrichshain': Gym.FRIEDRICHSHAIN
};

const DayMapping = {
  'monday': Day.MONDAY,
  'tuesday': Day.TUESDAY,
  'wednesday': Day.WEDNESDAY,
  'thursday': Day.THURSDAY,
  'friday': Day.FRIDAY,
  'saturday': Day.SATURDAY,
  'sunday': Day.SUNDAY
};
