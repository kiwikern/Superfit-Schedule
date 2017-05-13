import { Day } from '../enums/day.enum';
import { Gym } from '../enums/gym.enum';
import { FitnessClass } from './fitness-class';
import * as moment from 'moment';

export class FavoriteClass {
  startHour: number;
  startMinute: number;
  day: Day;
  workoutId: string;
  gym: Gym;

  public static isEqualTo(favorite: FavoriteClass, otherFavorite: FavoriteClass) {
    if (!otherFavorite) {
      return false;
    } else {
      return favorite.startMinute === otherFavorite.startMinute &&
        favorite.startHour === otherFavorite.startHour &&
        favorite.day === otherFavorite.day &&
        favorite.gym === otherFavorite.gym &&
        favorite.workoutId === otherFavorite.workoutId;
    }
  }

  constructor(fitnessClass: FitnessClass) {
    this.day = fitnessClass.day;
    this.workoutId = fitnessClass.workoutId;
    this.gym = fitnessClass.gym;
    this.startHour = fitnessClass.startHour;
    this.startMinute = fitnessClass.startMinute;
  }
}
