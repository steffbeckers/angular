import { Injectable } from '@angular/core';

// RxJS
import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

// NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TodosActions from '../actions/todos.actions';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions) {}

  loadTodoss$ = createEffect(
    (): any => {
      return this.actions$.pipe(
        ofType(TodosActions.loadTodos),
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        concatMap(() => EMPTY)
      );
    }
  );
}
