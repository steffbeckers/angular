import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCounter from '../reducers/counter.reducer';

export const selectCounterState = createFeatureSelector<fromCounter.State>(
  fromCounter.counterFeatureKey
);

// Added these custom selectors
export const selectCountValue = createSelector(
  selectCounterState,
  (state: fromCounter.State) => state.value
);
export const selectCountChanged = createSelector(
  selectCounterState,
  (state: fromCounter.State) => state.changed
);
