/**
 * Created by Kim on 02.04.2017.
 */
 import { Injectable } from '@angular/core';
import { FilterPayload } from './filter.reducers';

@Injectable()
export class FilterActions {
  static readonly FILTER_ADDED = 'FILTER_ADDED';
  static readonly FILTER_REMOVED = 'FILTER_REMOVED';
  static readonly FILTER_CLEARED = 'FILTER_CLEARED';

  addFilter(payload: FilterPayload) {
    return {
      type: FilterActions.FILTER_ADDED,
    payload: {
      filterName: payload.filterName,
      filterValue: payload.filterValue
    }
    };
  }

  removeFilter(payload: FilterPayload) {
    return {
      type: FilterActions.FILTER_REMOVED,
      payload: {
        filterName: payload.filterName
      }
    };
  }

  clearFilter() {
    return {
      type: FilterActions.FILTER_CLEARED,
    };
  }


}
