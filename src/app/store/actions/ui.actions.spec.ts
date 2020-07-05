import * as fromUI from './ui.actions';

describe('toggleAppTitle', () => {
  it('should return an action', () => {
    expect(fromUI.toggleAppTitle().type).toBe('[UI] Toggle app title');
  });
});
