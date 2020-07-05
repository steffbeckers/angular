import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as TodosActions from '../actions/todos.actions';

export const todosFeatureKey = 'todos';

export interface State extends EntityState<TodosActions.Todo> {
  // additional state property
  loading: boolean;
  selectedTodoId: string;
}

export const adapter: EntityAdapter<TodosActions.Todo> = createEntityAdapter<
  TodosActions.Todo
>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  selectedTodoId: null,
});

export const reducer = createReducer(
  initialState,
  on(TodosActions.loadTodos, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(TodosActions.loadTodosSuccess, (state, { items }) => {
    return adapter.upsertMany(
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
        selectedTodoId: items[0].id,
      }
    );
  })
);
