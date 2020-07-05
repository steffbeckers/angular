import { Action, createReducer, on } from '@ngrx/store';
import * as AdminActions from '../actions/admin.actions';

export const adminFeatureKey = 'admin';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(AdminActions.loadAdmins, (state) => state)
);
