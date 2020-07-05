import { Injectable } from '@angular/core';

// RxJS
import { interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';

// NgRx
import { Actions, createEffect } from '@ngrx/effects';
import * as CounterActions from 'src/app/counter/store/actions/counter.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  every5Seconds$ = createEffect((): any => {
    return interval(5000).pipe(mapTo(CounterActions.increment()));
  });
}
