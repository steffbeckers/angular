import * as fromTheme from './theme.actions';

describe('selectTheme', () => {
  it('should return an action', () => {
    expect(fromTheme.selectTheme({ selectedTheme: 'theme-steff' }).type).toBe('[Theme] Select theme');
  });
});
