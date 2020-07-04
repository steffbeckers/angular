import * as fromCounter from './counter.actions';

describe('increment', () => {
  it('should return an action', () => {
    expect(fromCounter.increment().type).toBe('[Counter] Increment');
  });
});
