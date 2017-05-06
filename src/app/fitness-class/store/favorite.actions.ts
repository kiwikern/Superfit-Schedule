/**
 * Created by Kim on 02.04.2017.
 */
import { Injectable } from '@angular/core';
import { FilterPayload } from './filter.reducers';

@Injectable()
export class FavoriteActions {
  static readonly FAVORITE_ADDED = 'FAVORITE_ADDED';
  static readonly FAVORITE_REMOVED = 'FAVORITE_REMOVED';
  static readonly FAVORITE_CLEARED = 'FAVORITE_CLEARED';

  addFilter(payload: FilterPayload) {
    return {
      type: FavoriteActions.FAVORITE_ADDED,
      payload: {
        filterName: payload.filterName,
        filterValue: payload.filterValue
      }
    };
  }

  removeFilter(payload: FilterPayload) {
    return {
      type: FavoriteActions.FAVORITE_REMOVED,
      payload: {
        filterName: payload.filterName
      }
    };
  }

  clearFilter() {
    return {
      type: FavoriteActions.FAVORITE_CLEARED,
    };
  }


}
