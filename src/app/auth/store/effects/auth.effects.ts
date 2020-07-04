import { Injectable } from '@angular/core';

// RxJS
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

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
}
