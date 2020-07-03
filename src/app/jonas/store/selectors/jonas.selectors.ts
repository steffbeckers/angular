import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromJonas from '../reducers/jonas.reducer';

export const selectJonasState = createFeatureSelector<fromJonas.State>(
  fromJonas.jonasFeatureKey
);
