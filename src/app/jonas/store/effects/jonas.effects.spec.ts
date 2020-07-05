import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { JonasEffects } from './jonas.effects';

describe('JonasEffects', () => {
  let actions$: Observable<any>;
  let effects: JonasEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JonasEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(JonasEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
