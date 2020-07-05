import { Injectable } from '@angular/core';

// RxJS
import { of, interval } from 'rxjs';
import { map, switchMap, catchError, mapTo, filter, tap } from 'rxjs/operators';

// NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TodosActions from '../actions/todos.actions';
import { TodosService } from '../../todos-service.service';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todosService: TodosService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodos),
      switchMap(() =>
        this.todosService.loadTodos().pipe(
          map((queryTodos: TodosActions.QueryTodosDto) =>
            TodosActions.loadTodosSuccess(queryTodos)
          ),
          catchError((error) => of(TodosActions.loadTodosFailure(error)))
        )
      )
    )
  );

  refreshTodosWith5SecondsInterval$ = createEffect(() =>
    interval(5000).pipe(mapTo(TodosActions.loadTodos()))
  );
}
