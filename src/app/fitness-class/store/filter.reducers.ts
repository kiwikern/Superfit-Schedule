import { IFilterState } from '../fitness-class.types';
import { IPayloadAction } from '../../store/payload-action.types';
import { FilterActions } from './filter.actions';
/**
 * Created by Kim on 02.04.2017.
 */

export const INITIAL_STATE: IFilterState = {};

export function filterReducer(state: IFilterState = INITIAL_STATE,
                              action: IPayloadAction<FilterPayload>): IFilterState {
  let newState;
  switch (action.type) {
    case FilterActions.FILTER_ADDED:
      newState = Object.assign(state);
      newState[action.payload.filterName] = action.payload.filterValue;
      break;
    case FilterActions.FILTER_REMOVED:
      newState = Object.assign(state);
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
