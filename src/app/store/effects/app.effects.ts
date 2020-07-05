import { Injectable } from '@angular/core';

// RxJS
import { interval, of, merge, fromEvent } from 'rxjs';
import { mapTo, map } from 'rxjs/operators';

// NgRx
import { Actions, createEffect } from '@ngrx/effects';
import * as CounterActions from 'src/app/counter/store/actions/counter.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  every5Seconds$ = createEffect((): any => {
    return interval(5000).pipe(mapTo(CounterActions.increment()));
  });

  online$ = createEffect((): any => {
    return merge(of(navigator.onLine), fromEvent(window, 'online').pipe(mapTo(true)), fromEvent(window, 'offline').pipe(mapTo(false))).pipe(
      map((online) => {
        // TODO: Add app action and reducer to store online state
        return online ? CounterActions.increment() : CounterActions.decrement();
      })
    );
  });
}
