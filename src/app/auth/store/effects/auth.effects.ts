import { Injectable } from '@angular/core';

// RxJS
import { of } from 'rxjs';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';

// NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from '../actions/auth.actions';

// Services
import { AuthService } from '../../auth.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  // TODO: Check any
  login$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(() =>
        this.authService.login().pipe(
          map((authenticated: AuthActions.AuthenticatedDto) => AuthActions.loginSuccess(authenticated)),
          catchError((error) => of(AuthActions.loginFailure(error)))
        )
      )
    )
  );

  // TODO: Check any
  loginWithEmailOrUsernamePassword$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(AuthActions.loginWithEmailOrUsernamePassword),
      exhaustMap((credentials) =>
        this.authService.loginWithEmailUsernamePassword(credentials).pipe(
          map((authenticated: AuthActions.AuthenticatedDto) => AuthActions.loginWithEmailOrUsernamePasswordSuccess(authenticated)),
          catchError((error) => of(AuthActions.loginWithEmailOrUsernamePasswordFailure(error)))
        )
      )
    )
  );

  // TODO: Check any
  loginWithClientIdClientSecret$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(AuthActions.loginWithClientIdClientSecret),
      exhaustMap((credentials) =>
        this.authService.loginWithClientIdClientSecret(credentials).pipe(
          map((authenticated: AuthActions.AuthenticatedDto) => AuthActions.loginWithClientIdClientSecretSuccess(authenticated)),
          catchError((error) => of(AuthActions.loginWithClientIdClientSecretFailure(error)))
        )
      )
    )
  );
}
