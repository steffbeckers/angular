import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from 'src/app/auth/store/reducers/auth.reducer';
import { AuthEffects } from 'src/app/auth/store/effects/auth.effects';

// Modules
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';

// Services
import { AuthService } from 'src/app/auth/auth.service';

// Components
import { AuthComponent } from 'src/app/auth/auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthService],
})
export class AuthModule {}
