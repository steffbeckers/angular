import { createAction, props } from '@ngrx/store';

// export interface CredentialsDto {
//   emailOrUsername: string;
//   password: string;
//   rememberMe: boolean;
// }

export interface AuthenticatedDto {
  access_token: string;
  expires_in: string;
  token_type: string;
  scope: string;
}

// export const login = createAction('[Auth] Login', props<CredentialsDto>());
export const login = createAction('[Auth] Login');
export const loginSuccess = createAction('[Auth] Login Success', props<AuthenticatedDto>());
export const loginFailure = createAction('[Auth] Login Failure', props<any>());
