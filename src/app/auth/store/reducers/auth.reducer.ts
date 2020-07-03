import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => state),
  on(AuthActions.loginSuccess, (state) => state),
  on(AuthActions.loginFailure, (state) => state)
);
