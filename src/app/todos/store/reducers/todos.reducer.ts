import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TodosActions from '../actions/todos.actions';

export const todosFeatureKey = 'todos';

export interface State extends EntityState<TodosActions.Todo> {
  // additional state property
  loading: boolean;
  error: any;
  selectedTodoId: string;
}

export const adapter: EntityAdapter<TodosActions.Todo> = createEntityAdapter<
  TodosActions.Todo
>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  error: null,
  selectedTodoId: null,
});

export const reducer = createReducer(
  initialState,
  on(TodosActions.loadTodos, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }),
  on(TodosActions.loadTodosSuccess, (state, { items }) => {
    return adapter.setAll(
      items.map((item) => {
        return {
          ...item,
          title: item.data && item.data.title && item.data.title.iv,
          description:
            item.data && item.data.description && item.data.description.iv,
          done: item.data && item.data.done && item.data.done.iv,
        } as TodosActions.Todo;
      }),
      {
        ...state,
        loading: false,
        selectedTodoId: state.selectedTodoId
          ? state.selectedTodoId
          : items[0].id,
      }
    );
  }),
  on(TodosActions.loadTodosFailure, (state, error) => {
    state = adapter.removeAll(state);
    return {
      ...state,
      loading: false,
      error,
    };
  }),
  on(TodosActions.loadTodoExtras, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }),
  on(TodosActions.loadTodoExtrasSuccess, (state, { items }) => {
    // TODO: This isn't working
    // for (const todoExtra of items) {
    //   adapter.upsertOne({ id: todoExtra.todo });
    // }

    return {
      ...state,
      loading: false,
    };
  }),
  // on(TodosActions.loadTodosFailure),
  on(TodosActions.selectTodo, (state, todo) => {
    return {
      ...state,
      selectedTodoId: todo.id,
    };
  })
);
