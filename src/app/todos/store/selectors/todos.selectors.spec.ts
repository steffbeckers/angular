import * as fromTodos from '../reducers/todos.reducer';
import { selectTodosState } from './todos.selectors';

describe('Todos Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTodosState({
      [fromTodos.todosFeatureKey]: {},
    });

    expect(result).toEqual({
      loading: false,
      error: null,
      ids: null,
      entities: null,
      selectedTodoId: null,
    });
  });
});
