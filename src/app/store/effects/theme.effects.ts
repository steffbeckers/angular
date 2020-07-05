import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as ThemeActions from '../actions/theme.actions';

@Injectable()
export class ThemeEffects {
  constructor(private actions$: Actions) {}

  loadThemes$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(ThemeActions.selectTheme),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });
}
