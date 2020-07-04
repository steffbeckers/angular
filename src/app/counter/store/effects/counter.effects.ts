import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as CounterActions from '../actions/counter.actions';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}
}
