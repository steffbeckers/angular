import * as fromJonas from '../reducers/jonas.reducer';
import { selectJonasState } from './jonas.selectors';

describe('Jonas Selectors', () => {
  it('should select the feature state', () => {
    const result = selectJonasState({
      [fromJonas.jonasFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
