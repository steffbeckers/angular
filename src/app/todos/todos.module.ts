import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTodos from './store/reducers/todos.reducer';
import { TodosEffects } from './store/effects/todos.effects';
import { TodosFacade } from './todos.facade';

// Modules
import { TodosRoutingModule } from './todos-routing.module';

// Services
import { TodosService } from 'src/app/todos/todos.service';

// Components
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    TodosRoutingModule,
    StoreModule.forFeature(fromTodos.todosFeatureKey, fromTodos.reducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
  providers: [TodosService, TodosFacade],
})
export class TodosModule {}
