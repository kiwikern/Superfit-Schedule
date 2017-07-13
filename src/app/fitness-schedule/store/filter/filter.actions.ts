import { Injectable } from '@angular/core';
import { FilterState } from './filter-state';
import { FilterPayload } from './filter-payload';
import { dispatch } from '@angular-redux/store';
import { Angulartics2 } from 'angulartics2';

@Injectable()
export class FilterActions {
  static readonly FILTER_ADDED = 'FILTER_ADDED';
  static readonly FILTER_REMOVED = 'FILTER_REMOVED';
  static readonly FILTER_CLEARED = 'FILTER_CLEARED';
  static readonly FILTER_SET = 'FILTER_SET';

  constructor(private angulartics: Angulartics2) {
  }

  @dispatch()
  addFilter(payload: FilterPayload) {
    this.angulartics.eventTrack.next({action: 'addFilter', properties: {category: payload.filterName}});
    return {
      type: FilterActions.FILTER_ADDED,
      payload: {
        filterName: payload.filterName,
        filterValue: payload.filterValue
      }
    };
  }

  @dispatch()
  removeFilter(payload: FilterPayload) {
    this.angulartics.eventTrack.next({action: 'removeFilter', properties: {category: payload.filterName}});
    return {
      type: FilterActions.FILTER_REMOVED,
      payload: {
        filterName: payload.filterName
      }
    };
  }

  clearFilter() {
    return {
      type: FilterActions.FILTER_CLEARED
    };
  }

  setFilter(payload: FilterState) {
    return {
      type: FilterActions.FILTER_SET,
      payload
    };
  }

}
