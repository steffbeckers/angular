import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';

import * as fromUI from '../store/reducers/ui.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {};
reducers[fromUI.uiFeatureKey] = fromUI.reducer;

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['auth', 'counter'], rehydrate: true })(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer];
