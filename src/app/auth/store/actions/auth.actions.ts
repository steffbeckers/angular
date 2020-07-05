import { createAction, props } from '@ngrx/store';

export interface EmailOrUsernamePasswordCredentialsDto {
  emailOrUsername: string;
  password: string;
}

export interface ClientIdClientSecretCredentialsDto {
  clientId: string;
  clientSecret: string;
}

export interface AuthenticatedDto {
  access_token: string;
  expires_in: string;
  token_type: string;
  scope: string;
}

export const login = createAction('[Auth] Login');
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<AuthenticatedDto>()
);
export const loginFailure = createAction('[Auth] Login Failure', props<any>());

export const loginWithEmailOrUsernamePassword = createAction(
  '[Auth] Login password',
  props<EmailOrUsernamePasswordCredentialsDto>()
);
export const loginWithEmailOrUsernamePasswordSuccess = createAction(
  '[Auth] Login password Success',
  props<AuthenticatedDto>()
);
export const loginWithEmailOrUsernamePasswordFailure = createAction(
  '[Auth] Login password Failure',
  props<any>()
);

export const loginWithClientIdClientSecret = createAction(
  '[Auth] Login client/secret',
  props<ClientIdClientSecretCredentialsDto>()
);
export const loginWithClientIdClientSecretSuccess = createAction(
  '[Auth] Login client/secret Success',
  props<AuthenticatedDto>()
);
export const loginWithClientIdClientSecretFailure = createAction(
  '[Auth] Login client/secret Failure',
  props<any>()
);

export const logout = createAction('[Auth] Logout');
