import { Injectable } from '@angular/core';

// RxJS
import { of, interval } from 'rxjs';
import {
  map,
  switchMap,
  catchError,
  mapTo,
  tap,
  exhaustMap,
} from 'rxjs/operators';

// NgRx
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TodosActions from '../actions/todos.actions';
import { TodosService } from '../../todos.service';

@Injectable()
export class TodosEffects {
  constructor(
    private store: Store,
    private actions$: Actions,
    private todosService: TodosService
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodos),
      switchMap(() =>
        this.todosService.loadTodos().pipe(
          tap((queryTodos: TodosActions.QueryTodosDto) => {
            for (const todo of queryTodos.items) {
              this.store.dispatch(TodosActions.loadTodoExtras(todo));
            }
          }),
          map((queryTodos: TodosActions.QueryTodosDto) =>
            TodosActions.loadTodosSuccess(queryTodos)
          ),
          catchError((error) => of(TodosActions.loadTodosFailure(error)))
        )
      )
    )
  );

  loadTodoExtras$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodoExtras),
      exhaustMap((todo) =>
        this.todosService.loadExtrasForTodo(todo.id).pipe(
          map((queryTodoExtras: TodosActions.QueryTodoExtrasDto) =>
            TodosActions.loadTodoExtrasSuccess(queryTodoExtras)
          ),
          catchError((error) => of(TodosActions.loadTodoExtrasFailure(error)))
        )
      )
    )
  );

  // This starts and keeps running when the module is loaded
  // refreshTodosWith5SecondsInterval$ = createEffect(() =>
  //   interval(5000).pipe(mapTo(TodosActions.loadTodos()))
  // );
}
