import { Action, createReducer, on } from '@ngrx/store';
import * as JonasActions from '../actions/jonas.actions';

export const jonasFeatureKey = 'jonas';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(JonasActions.loadJonass, (state) => state)
);
