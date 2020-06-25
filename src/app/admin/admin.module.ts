import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from './store/reducers/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './store/effects/admin.effects';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(fromAdmin.adminFeatureKey, fromAdmin.reducer), EffectsModule.forFeature([AdminEffects])],
})
export class AdminModule {}
