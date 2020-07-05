import { Action, createReducer, on } from '@ngrx/store';
import * as ThemeActions from '../actions/theme.actions';

export const themeFeatureKey = 'theme';

export interface State {
  availableThemes: string[];
  current: string;
}

export const initialState: State = {
  availableThemes: ['theme-steff', 'theme-2020'],
  current: 'theme-steff',
};

export const reducer = createReducer(
  initialState,
  on(ThemeActions.selectTheme, (state, payload) => {
    return {
      ...state,
      current: payload.selectedTheme,
    };
  })
);
