import * as fromJonas from './jonas.actions';

describe('loadJonass', () => {
  it('should return an action', () => {
    expect(fromJonas.loadJonass().type).toBe('[Jonas] Load Jonass');
  });
});
