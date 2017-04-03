import * as moment from 'moment';
import { IFitnessClass } from '../fitness-class/fitness-class.types';

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
      day: day,
      duration: getClassDuration(course.course),
      workoutName: course.course,
      gym: gym
    };
    classes.push(fitnessClass);
  }
  return classes;
}

function getClassDuration(className: string) {
  if (className.includes('yogaxp')) {
    return 60
  } else if (className.includes('xp') || className.includes('lmi')) {
    return 30
  } else if (className.includes('yoga')) {
    return 90
  } else {
    return 60
  }
}
