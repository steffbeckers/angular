import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as AdminActions from '../actions/admin.actions';

@Injectable()
export class AdminEffects {
  constructor(private actions$: Actions) {}

  // loadAdmins$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(AdminActions.loadAdmins),
  //     /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //     concatMap(() => EMPTY)
  //   );
  // });
}
