import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCounter from './store/reducers/counter.reducer';
import { CounterEffects } from './store/effects/counter.effects';

// Modules
import { CounterRoutingModule } from './counter-routing.module';

// Components
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    CounterRoutingModule,
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducer),
    EffectsModule.forFeature([CounterEffects]),
  ],
})
export class CounterModule {}
