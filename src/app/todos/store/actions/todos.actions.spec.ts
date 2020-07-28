import * as fromTodos from './todos.actions';

describe('loadTodos', () => {
  it('should return an action', () => {
    expect(fromTodos.loadTodos().type).toBe('[Todos] Load todos');
  });
});
