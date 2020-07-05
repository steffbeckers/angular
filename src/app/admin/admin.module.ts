import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAdmin from './store/reducers/admin.reducer';
import { AdminEffects } from './store/effects/admin.effects';

// Modules
import { AdminRoutingModule } from './admin-routing.module';

// Components
import { AdminComponent } from './admin.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [AdminComponent, OrdersComponent, SettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    AdminRoutingModule,
    StoreModule.forFeature(fromAdmin.adminFeatureKey, fromAdmin.reducer),
    EffectsModule.forFeature([AdminEffects]),
  ],
  providers: [],
})
export class AdminModule {}
