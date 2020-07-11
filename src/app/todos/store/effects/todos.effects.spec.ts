import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TodosEffects } from './todos.effects';
import { TodosService } from '../../todos.service';

describe('TodosEffects', () => {
  let actions$: Observable<any>;
  let effects: TodosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodosEffects,
        provideMockActions(() => actions$),
        TodosService,
      ],
    });

    effects = TestBed.inject(TodosEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
