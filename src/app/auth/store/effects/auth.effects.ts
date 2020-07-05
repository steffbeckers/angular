import { Injectable } from '@angular/core';

// RxJS
import { of } from 'rxjs';
import { map, switchMap, exhaustMap, catchError } from 'rxjs/operators';

// NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from '../actions/auth.actions';
import * as CounterActions from 'src/app/counter/store/actions/counter.actions';

// Services
import { AuthService } from '../../auth.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  // TODO: Check any
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(() =>
        this.authService.login().pipe(
          map((authenticated: AuthActions.AuthenticatedDto) =>
            AuthActions.loginSuccess(authenticated)
          ),
          catchError((error) => of(AuthActions.loginFailure(error)))
        )
      )
    )
  );

  // TODO: Check any
  loginWithEmailOrUsernamePassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginWithEmailOrUsernamePassword),
      exhaustMap((credentials) =>
        this.authService.loginWithEmailUsernamePassword(credentials).pipe(
          map((authenticated: AuthActions.AuthenticatedDto) =>
            AuthActions.loginWithEmailOrUsernamePasswordSuccess(authenticated)
          ),
          catchError((error) =>
            of(AuthActions.loginWithEmailOrUsernamePasswordFailure(error))
          )
        )
      )
    )
  );

  // TODO: Check any
  loginWithClientIdClientSecret$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginWithClientIdClientSecret),
      exhaustMap((credentials) =>
        this.authService.loginWithClientIdClientSecret(credentials).pipe(
          // Only return authentication success action
          // map((authenticated: AuthActions.AuthenticatedDto) => AuthActions.loginWithClientIdClientSecretSuccess(authenticated)),
          // Return authentication success action, but also increment counter
          switchMap((authenticated: AuthActions.AuthenticatedDto) => [
            AuthActions.loginWithClientIdClientSecretSuccess(authenticated),
            CounterActions.increment(),
          ]),
          catchError((error) =>
            of(AuthActions.loginWithClientIdClientSecretFailure(error))
          )
        )
      )
    )
  );
}
