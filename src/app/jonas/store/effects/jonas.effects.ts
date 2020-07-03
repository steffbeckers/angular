import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as JonasActions from '../actions/jonas.actions';

@Injectable()
export class JonasEffects {
  constructor(private actions$: Actions) {}
}
