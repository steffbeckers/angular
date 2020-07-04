import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login() {
    const formData = new FormData();
    formData.set('grant_type', 'client_credentials');
    formData.set('client_id', 'angular:app');
    formData.set('client_secret', 'hxvr8rtvhmsprnmrlm4jpuexxz2u11dxusxr5ob9iyox');
    formData.set('scope', 'squidex-api');

    return this.http.post('https://squidex.steffbeckers.eu/identity-server/connect/token', formData, {
      responseType: 'json',
    });
  }
}
