import { IPayloadAction } from '../../../store/payload-action.types';
import { FilterActions } from './filter.actions';
import { FilterState } from './filter-state';
/**
 * Created by Kim on 02.04.2017.
 */

export const INITIAL_STATE: FilterState = {};

export function filterReducer(state: FilterState = INITIAL_STATE,
                              action: IPayloadAction<FilterPayload>): FilterState {
  let newState;
  switch (action.type) {
    case FilterActions.FILTER_ADDED:
      newState = {...state};
      newState[action.payload.filterName] = action.payload.filterValue;
      break;
    case FilterActions.FILTER_REMOVED:
      newState = {...state};
      delete newState[action.payload.filterName];
      break;
    case FilterActions.FILTER_CLEARED:
      newState = {};
      break;
    default:
      newState = state;
  }

  return newState;
}

export interface FilterPayload {
  filterName: string;
  filterValue?: any;
}
