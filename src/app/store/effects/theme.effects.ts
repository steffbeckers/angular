import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as ThemeActions from '../actions/theme.actions';

@Injectable()
export class ThemeEffects {
  constructor(private actions$: Actions) {}

  loadThemes$ = createEffect(() =>
    this.actions$.pipe(ofType(ThemeActions.selectTheme))
  );
}
