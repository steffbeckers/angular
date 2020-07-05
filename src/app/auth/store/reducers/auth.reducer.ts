import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  loading: boolean;
  error: any;
  authenticated: boolean;
  token: string;
}

export const initialState: State = {
  loading: false,
  error: null,
  authenticated: false,
  token: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }),
  on(AuthActions.loginSuccess, (state, authenticated) => {
    return {
      ...state,
      loading: false,
      error: null,
      authenticated: true,
      token: authenticated.access_token,
    };
  }),
  on(AuthActions.loginFailure, (state, error) => {
    return {
      ...state,
      loading: false,
      error,
    };
  }),
  on(AuthActions.loginWithEmailOrUsernamePassword, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }),
  on(AuthActions.loginWithEmailOrUsernamePasswordSuccess, (state, authenticated) => {
    return {
      ...state,
      loading: false,
      error: null,
      authenticated: true,
      token: authenticated.access_token,
    };
  }),
  on(AuthActions.loginWithEmailOrUsernamePasswordFailure, (state, error) => {
    return {
      ...state,
      loading: false,
      error,
    };
  }),
  on(AuthActions.loginWithClientIdClientSecret, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }),
  on(AuthActions.loginWithClientIdClientSecretSuccess, (state, authenticated) => {
    return {
      ...state,
      loading: false,
      error: null,
      authenticated: true,
      token: authenticated.access_token,
    };
  }),
  on(AuthActions.loginWithClientIdClientSecretFailure, (state, error) => {
    return {
      ...state,
      loading: false,
      error,
    };
  }),
  on(AuthActions.logout, (state) => {
    return initialState;
  })
);
