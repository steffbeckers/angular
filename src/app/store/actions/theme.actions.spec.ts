import * as fromTheme from './theme.actions';

describe('loadThemes', () => {
  it('should return an action', () => {
    expect(fromTheme.loadThemes().type).toBe('[Theme] Load Themes');
  });
});
