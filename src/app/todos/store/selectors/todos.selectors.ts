import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from '../reducers/todos.reducer';

export const selectTodosState = createFeatureSelector<fromTodos.State>(
  fromTodos.todosFeatureKey
);

// Added these custom selectors

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = fromTodos.adapter.getSelectors(selectTodosState);
