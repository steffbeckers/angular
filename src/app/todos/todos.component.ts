import { Component, OnInit } from '@angular/core';
import { TodosFacade } from './todos.facade';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todosState$ = this.todosFacade.todosState$;
  ids$ = this.todosFacade.ids$;
  todoItemsById$ = this.todosFacade.todoItemsById$;
  todoItems$ = this.todosFacade.todoItems$;
  total$ = this.todosFacade.total$;

  constructor(private todosFacade: TodosFacade) {}

  ngOnInit(): void {
    this.todosFacade.loadTodos();
  }

  selectTodo(todo) {
    this.todosFacade.selectTodo(todo);
  }
}
