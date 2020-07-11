import { Injectable } from '@angular/core';

// NgRx
import { Store } from '@ngrx/store';
import * as TodosActions from 'src/app/todos/store/actions/todos.actions';
import {
  selectTodosState,
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} from 'src/app/todos/store/selectors/todos.selectors';

@Injectable()
export class TodosFacade {
  todosState$ = this.store.select(selectTodosState);
  ids$ = this.store.select(selectIds);
  todoItemsById$ = this.store.select(selectEntities);
  todoItems$ = this.store.select(selectAll);
  total$ = this.store.select(selectTotal);

  constructor(private store: Store) {}

  loadTodos() {
    this.store.dispatch(TodosActions.loadTodos());
  }

  selectTodo(todo: TodosActions.Todo) {
    this.store.dispatch(TodosActions.selectTodo(todo));
  }
}
