import { Component, OnInit } from '@angular/core';

// RxJS
import { Observable, Subject } from 'rxjs';

// NgRx
import { Store } from '@ngrx/store';
import * as fromCounter from 'src/app/counter/store/reducers/counter.reducer';
import {
  increment,
  decrement,
  reset,
} from 'src/app/counter/store/actions/counter.actions';
import {
  selectCountValue,
  selectCountChanged,
} from './store/selectors/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  public value$: Observable<number>;
  public changed$: Observable<number>;
  // public counter$: Subject<fromCounter.State> = new Subject<fromCounter.State>();

  constructor(private store: Store<fromCounter.State>) {
    this.value$ = store.select(selectCountValue);
    this.changed$ = store.select(selectCountChanged);

    // store.subscribe((counter) => {
    //   this.counter$.next(counter);
    // });
  }

  ngOnInit(): void {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
