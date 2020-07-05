import { Component, OnInit } from '@angular/core';

// NgRx
import { Store } from '@ngrx/store';
import * as TodosActions from 'src/app/todos/store/actions/todos.actions';
import {
  selectTodosState,
  selectTodoItems,
} from 'src/app/todos/store/selectors/todos.selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$ = this.store.select(selectTodosState);
  todoItems$ = this.store.select(selectTodoItems);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(TodosActions.loadTodos());
  }
}
