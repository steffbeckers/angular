import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTodos from './store/reducers/todos.reducer';
import { TodosEffects } from './store/effects/todos.effects';

// Modules
import { TodosRoutingModule } from './todos-routing.module';

// Components
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    StoreModule.forFeature(fromTodos.todosFeatureKey, fromTodos.reducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
})
export class TodosModule {}
