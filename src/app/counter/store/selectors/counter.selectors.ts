import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCounter from '../reducers/counter.reducer';

export const selectCounterState = createFeatureSelector<fromCounter.State>(
  fromCounter.counterFeatureKey
);

// Added these custom selectors

// Router
import * as fromApp from 'src/app/store';
import * as fromRouter from '@ngrx/router-store';
export const selectRouter = createFeatureSelector<
  fromApp.State,
  fromRouter.RouterReducerState<any>
>('router');
export const {
  selectCurrentRoute, // select the current route
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = fromRouter.getSelectors(selectRouter);

export const selectMultiplyQueryParam = selectQueryParam('multiply');

// Counter
export const selectCountValue = createSelector(
  selectCounterState,
  (state: fromCounter.State) => state.value
);
export const selectCountChanged = createSelector(
  selectCounterState,
  (state: fromCounter.State) => state.changed
);

export const selectMultiplierValue = createSelector(
  selectCounterState,
  selectMultiplyQueryParam,
  (state: fromCounter.State, multiplyValue) => +multiplyValue
);
export const selectMultipliedCountValue = createSelector(
  selectCounterState,
  selectMultiplyQueryParam,
  (state: fromCounter.State, multiplyValue) => state.value * +multiplyValue
);
