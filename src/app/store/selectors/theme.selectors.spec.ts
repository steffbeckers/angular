import * as fromTheme from '../reducers/theme.reducer';
import { selectThemeState } from './theme.selectors';

describe('Theme Selectors', () => {
  it('should select the feature state', () => {
    const result = selectThemeState({
      [fromTheme.themeFeatureKey]: {},
    });

    expect(result).toEqual({
      availableThemes: ['theme-steff', 'theme-2020'],
      current: 'theme-steff',
    });
  });
});
