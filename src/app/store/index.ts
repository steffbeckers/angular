import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';

import * as fromRouter from '@ngrx/router-store';
import * as fromUI from '../store/reducers/ui.reducer';
import * as fromTheme from '../store/reducers/theme.reducer';
import * as fromAuth from 'src/app/auth/store/reducers/auth.reducer';

export interface State {
  router: fromRouter.RouterReducerState<any>;
  [fromUI.uiFeatureKey]: fromUI.State;
  [fromTheme.themeFeatureKey]: fromTheme.State;
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  [fromUI.uiFeatureKey]: fromUI.reducer,
  [fromTheme.themeFeatureKey]: fromTheme.reducer,
  [fromAuth.authFeatureKey]: fromAuth.reducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['ui', 'theme', 'auth', 'counter'],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [localStorageSyncReducer]
  : [localStorageSyncReducer];
