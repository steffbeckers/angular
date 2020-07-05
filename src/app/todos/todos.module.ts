import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTodos from './store/reducers/todos.reducer';
import { TodosEffects } from './store/effects/todos.effects';

// Modules
import { TodosRoutingModule } from './todos-routing.module';

// Services
import { TodosService } from 'src/app/todos/todos-service.service';

// Components
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TodosRoutingModule,
    StoreModule.forFeature(fromTodos.todosFeatureKey, fromTodos.reducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
  providers: [TodosService],
})
export class TodosModule {}
