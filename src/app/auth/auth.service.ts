import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  ClientIdClientSecretCredentialsDto,
  EmailOrUsernamePasswordCredentialsDto,
} from './store/actions/auth.actions';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login() {
    return this.http.get(
      'https://squidex.steffbeckers.eu/identity-server/account/login'
    );
  }

  loginWithEmailUsernamePassword(
    emailUsernamePasswordCredentials: EmailOrUsernamePasswordCredentialsDto
  ) {
    const formData = new FormData();
    formData.set('grant_type', 'password');
    formData.set('username', emailUsernamePasswordCredentials.emailOrUsername);
    formData.set('password', emailUsernamePasswordCredentials.password);
    formData.set('scope', 'squidex-api');

    return this.http.post(
      'https://squidex.steffbeckers.eu/identity-server/connect/token',
      formData,
      {
        responseType: 'json',
      }
    );
  }

  loginWithClientIdClientSecret(
    clientIdClientSecretCredentials: ClientIdClientSecretCredentialsDto
  ) {
    const formData = new FormData();
    formData.set('grant_type', 'client_credentials');
    formData.set('client_id', clientIdClientSecretCredentials.clientId);
    formData.set('client_secret', clientIdClientSecretCredentials.clientSecret);
    formData.set('scope', 'squidex-api');

    return this.http.post(
      'https://squidex.steffbeckers.eu/identity-server/connect/token',
      formData,
      {
        responseType: 'json',
      }
    );
  }
}
