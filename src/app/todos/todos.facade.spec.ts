import { TestBed } from '@angular/core/testing';

import { TodosFacade } from './todos.facade';

describe('TodosFacade', () => {
  let service: TodosFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
