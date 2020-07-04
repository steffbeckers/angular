import { Component, OnInit } from '@angular/core';

// RxJS
import { Observable } from 'rxjs';

// NgRx
import { Store } from '@ngrx/store';
import * as fromAuth from 'src/app/auth/store/reducers/auth.reducer';
import { login } from 'src/app/auth/store/actions/auth.actions';
import { selectAuthState } from './store/selectors/auth.selectors';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  auth$: Observable<fromAuth.State>;

  constructor(private store: Store<fromAuth.State>) {
    this.auth$ = store.select(selectAuthState);
  }

  ngOnInit(): void {}

  login(): void {
    this.store.dispatch(login());
  }
}
