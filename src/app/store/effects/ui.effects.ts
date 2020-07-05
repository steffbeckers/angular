import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';

import * as UIActions from '../actions/ui.actions';
import * as CounterActions from 'src/app/counter/store/actions/counter.actions';

@Injectable()
export class UIEffects {
  constructor(private actions$: Actions) {}

  toggleAppTitle$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(UIActions.toggleAppTitle),
      concatMap(() => [CounterActions.decrement()])
    );
  });
}
