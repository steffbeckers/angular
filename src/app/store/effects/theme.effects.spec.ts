import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ThemeEffects } from './theme.effects';

describe('ThemeEffects', () => {
  let actions$: Observable<any>;
  let effects: ThemeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ThemeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ThemeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
