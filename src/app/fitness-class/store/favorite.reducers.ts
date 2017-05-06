import { IPayloadAction } from '../../store/payload-action.types';
import { FitnessClass } from '../interfaces/fitness-class';
import { FavoriteState } from '../interfaces/favorite-state';
import { FavoriteActions } from './favorite.actions';
/**
 * Created by Kim on 02.04.2017.
 */

export const INITIAL_STATE: FavoriteState = {
  workouts: []
};

export function favoriteReducer(state: FavoriteState = INITIAL_STATE,
                                action: IPayloadAction<FavoritePayload>): FavoriteState {
  let newState;
  switch (action.type) {
    case FavoriteActions.FAVORITE_ADDED:
      newState = {workouts: [...state.workouts]};
      newState.workouts.push(action.payload.workout);
      break;
    case FavoriteActions.FAVORITE_REMOVED:
      newState = {workouts: [...state.workouts]};
      const index = newState.workouts.indexOf(action.payload.workout);
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
