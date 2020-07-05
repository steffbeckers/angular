import { Component, OnInit } from '@angular/core';

// RxJS
import { Observable, Subject } from 'rxjs';

// NgRx
import { Store } from '@ngrx/store';
import * as fromCounter from 'src/app/counter/store/reducers/counter.reducer';
import * as CounterActions from 'src/app/counter/store/actions/counter.actions';
import {
  selectCountValue,
  selectCountChanged,
  selectMultipliedCountValue,
  selectMultiplierValue,
} from './store/selectors/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  value$: Observable<number> = this.store.select(selectCountValue);
  multiplier$: Observable<number> = this.store.select(selectMultiplierValue);
  multipliedValue$: Observable<number> = this.store.select(
    selectMultipliedCountValue
  );
  changed$: Observable<number> = this.store.select(selectCountChanged);

  constructor(private store: Store<fromCounter.State>) {}

  ngOnInit(): void {}

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    if (confirm('Are you sure you want to reset the counter?')) {
      this.store.dispatch(CounterActions.reset());
    }
  }
}
