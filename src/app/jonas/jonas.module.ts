import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JonasRoutingModule } from './jonas-routing.module';
import { JonasComponent } from './jonas.component';
import { StoreModule } from '@ngrx/store';
import * as fromJonas from './store/reducers/jonas.reducer';
import { EffectsModule } from '@ngrx/effects';
import { JonasEffects } from './store/effects/jonas.effects';


@NgModule({
  declarations: [JonasComponent],
  imports: [
    CommonModule,
    JonasRoutingModule,
    StoreModule.forFeature(fromJonas.jonasFeatureKey, fromJonas.reducer),
    EffectsModule.forFeature([JonasEffects])
  ]
})
export class JonasModule { }
