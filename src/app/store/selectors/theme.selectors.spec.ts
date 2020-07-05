import * as fromTheme from '../reducers/theme.reducer';
import { selectThemeState } from './theme.selectors';

describe('Theme Selectors', () => {
  it('should select the feature state', () => {
    const result = selectThemeState({
      [fromTheme.themeFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
