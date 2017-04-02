import { Action } from 'redux';

export interface IPayloadAction<P> extends Action {
  payload?: P;
  error?: any;
}
