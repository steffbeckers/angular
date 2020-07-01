import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from '../actions/counter.actions';

export const counterFeatureKey = 'counter';

export interface State {
  value: number;
  changed: number;
}

export const initialState: State = {
  value: 0,
  changed: 0,
};

export const reducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => {
    return {
      ...state,
      value: state.value + 1,
      changed: state.changed + 1,
    };
  }),
  on(CounterActions.decrement, (state) => {
    return {
      ...state,
      value: state.value - 1,
      changed: state.changed + 1,
    };
  }),
  on(CounterActions.reset, (state) => {
    return initialState;
  })
);
