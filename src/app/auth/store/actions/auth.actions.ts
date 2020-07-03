import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export interface Credentials {
  emailOrUsername: string;
  password: string;
  rememberMe: boolean;
}

export interface Authenticated {
  user: User;
  token: string;
  rememberMe: boolean;
}

export const login = createAction('[Auth] Login', props<Credentials>());
export const loginSuccess = createAction('[Auth] Login Success', props<Authenticated>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: any }>());
