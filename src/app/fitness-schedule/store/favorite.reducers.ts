import { IPayloadAction } from '../../store/payload-action.types';
import { FitnessClass } from '../interfaces/fitness-class';
import { FavoriteState } from '../interfaces/favorite-state';
import { FavoriteActions } from './favorite.actions';
import { FavoriteClass } from '../interfaces/favorite-class';
/**
 * Created by Kim on 02.04.2017.
 */

export const INITIAL_STATE: FavoriteState = {
  workouts: []
};

export function favoriteReducer(state: FavoriteState = INITIAL_STATE,
                                action: IPayloadAction<FavoritePayload>): FavoriteState {
  let newState;
  let favoriteClass;
  switch (action.type) {
    case FavoriteActions.FAVORITE_ADDED:
      newState = {workouts: [...state.workouts]};
      favoriteClass = new FavoriteClass(action.payload.workout);
      newState.workouts.push(favoriteClass);
      break;
    case FavoriteActions.FAVORITE_REMOVED:
      newState = {workouts: [...state.workouts]};
      favoriteClass = new FavoriteClass(action.payload.workout);
      const index = newState.workouts.findIndex((f) => FavoriteClass.isEqualTo(favoriteClass, f));
      newState.workouts.splice(index, 1);
      break;
    case FavoriteActions.FAVORITE_CLEARED:
      newState = {workouts: {}};
      break;
    default:
      newState = state;
  }

  return newState;
}

export interface FavoritePayload {
  workout: FitnessClass;
}