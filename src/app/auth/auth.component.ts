import { Component, OnInit } from '@angular/core';

// RxJS
import { Observable } from 'rxjs';

// NgRx
import { Store } from '@ngrx/store';
import * as fromAuth from 'src/app/auth/store/reducers/auth.reducer';
import { login, loginWithClientIdClientSecret, loginWithEmailOrUsernamePassword } from 'src/app/auth/store/actions/auth.actions';
import { ClientIdClientSecretCredentialsDto, EmailOrUsernamePasswordCredentialsDto } from 'src/app/auth/store/actions/auth.actions';
import { selectAuthState } from './store/selectors/auth.selectors';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  auth$: Observable<fromAuth.State>;

  // Login with password
  emailOrUsernamePasswordCredentials: EmailOrUsernamePasswordCredentialsDto = {
    emailOrUsername: 'steff@steffbeckers.eu',
    password: null,
  };

  // Login with client ID and secret
  clientIdClientSecretCredentials: ClientIdClientSecretCredentialsDto = {
    clientId: '5efb6ccb7e250b000195a1ff',
    clientSecret: null,
  };

  constructor(private store: Store<fromAuth.State>) {
    this.auth$ = store.select(selectAuthState);
  }

  ngOnInit(): void {}

  login(): void {
    this.store.dispatch(login());
  }

  loginWithEmailOrUsernamePassword(): void {
    this.store.dispatch(loginWithEmailOrUsernamePassword(this.emailOrUsernamePasswordCredentials));
  }

  loginWithClientIdClientSecret(): void {
    this.store.dispatch(loginWithClientIdClientSecret(this.clientIdClientSecretCredentials));
  }
}
