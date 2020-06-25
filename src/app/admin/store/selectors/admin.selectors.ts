import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdmin from '../reducers/admin.reducer';

export const selectAdminState = createFeatureSelector<fromAdmin.State>(
  fromAdmin.adminFeatureKey
);
