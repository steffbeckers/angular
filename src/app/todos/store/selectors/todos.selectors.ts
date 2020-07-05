import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from '../reducers/todos.reducer';

export const selectTodosState = createFeatureSelector<fromTodos.State>(
  fromTodos.todosFeatureKey
);

export const selectTodoItems = createSelector(selectTodosState, (state) =>
  Object.values(state.entities)
);
