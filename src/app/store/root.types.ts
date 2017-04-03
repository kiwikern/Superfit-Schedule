import { IFitnessClass } from '../fitness-class/fitness-class.types';
/**
 * Created by Kim on 02.04.2017.
 */
export interface IAppState {
  schedule: IFitnessClass[];
  isLoading: boolean;
  error: null;
}
