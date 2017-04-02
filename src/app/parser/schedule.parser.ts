import { IFitnessClass, Day } from '../store/root.types';

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
      startTime: null, // Date.parse(course.time),
      day: day,
      duration: 60,
      workoutName: course.course,
      gym: gym
    };
    classes.push(fitnessClass);
  }
  return classes;
}
