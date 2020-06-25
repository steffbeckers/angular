import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from './store/reducers/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './store/effects/admin.effects';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [AdminComponent, OrdersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature(fromAdmin.adminFeatureKey, fromAdmin.reducer),
    EffectsModule.forFeature([AdminEffects]),
  ],
  providers: [],
})
export class AdminModule {}