import { Action, createReducer, on } from '@ngrx/store';
import * as TodosActions from '../actions/todos.actions';

export const todosFeatureKey = 'todos';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(TodosActions.loadTodos, (state) => state)
);
