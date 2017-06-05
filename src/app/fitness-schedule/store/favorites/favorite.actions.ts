/**
 * Created by Kim on 02.04.2017.
 */
import { Injectable } from '@angular/core';
import { FavoritePayload } from './favorite.reducers';
import { FavoriteState } from './favorite-state';

@Injectable()
export class FavoriteActions {
  static readonly FAVORITE_ADDED = 'FAVORITE_ADDED';
  static readonly FAVORITE_REMOVED = 'FAVORITE_REMOVED';
  static readonly FAVORITE_CLEARED = 'FAVORITE_CLEARED';
  static readonly FAVORITE_SET = 'FAVORITE_SET';

  addFavorite(payload: FavoritePayload) {
    return {
      type: FavoriteActions.FAVORITE_ADDED,
      payload
    };
  }

  removeFavorite(payload: FavoritePayload) {
    return {
      type: FavoriteActions.FAVORITE_REMOVED,
      payload
    };
  }

  clearFavorites() {
    return {
      type: FavoriteActions.FAVORITE_CLEARED,
    };
  }

  setFavorites(payload: FavoriteState) {
    return {
      type: FavoriteActions.FAVORITE_SET,
      payload: payload
    };
  }

}
