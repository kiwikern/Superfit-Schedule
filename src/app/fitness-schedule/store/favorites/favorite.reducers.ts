import { IPayloadAction } from '../../../store/payload-action.types';
import { FitnessClass } from '../../interfaces/fitness-class';
import { FavoriteState } from './favorite-state';
import { FavoriteActions } from './favorite.actions';
/**
 * Created by Kim on 02.04.2017.
 */

export const INITIAL_STATE: FavoriteState = {
  workouts: []
};

export function favoriteReducer(state: FavoriteState = INITIAL_STATE,
                                action: IPayloadAction<FavoritePayload> | IPayloadAction<FavoriteState>): FavoriteState {
  let newState: FavoriteState;
  let favoriteClass: FitnessClass;
  switch (action.type) {
    case FavoriteActions.FAVORITE_ADDED:
      newState = {workouts: [...state.workouts]};
      favoriteClass = (<FavoritePayload>action.payload).workout;
      newState.workouts.push(favoriteClass);
      break;
    case FavoriteActions.FAVORITE_REMOVED:
      newState = {workouts: [...state.workouts]};
      favoriteClass = (<FavoritePayload>action.payload).workout;
      const index = newState.workouts.findIndex(f => favoriteClass.id === f.id);
      newState.workouts.splice(index, 1);
      break;
    case FavoriteActions.FAVORITE_CLEARED:
      newState = {workouts: []};
      break;
    case FavoriteActions.FAVORITE_SET:
      if (action.payload) {
        newState = <FavoriteState>action.payload;
      } else {
        newState = state;
      }
      break;
    default:
      newState = state;
  }

  return newState;
}

export interface FavoritePayload {
  workout: FitnessClass;
}
