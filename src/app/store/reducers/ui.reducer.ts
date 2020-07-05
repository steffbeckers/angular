import { Action, createReducer, on } from '@ngrx/store';
import * as UIActions from '../actions/ui.actions';

export const uiFeatureKey = 'ui';

export interface State {
  showAppTitle: boolean;
}

export const initialState: State = {
  showAppTitle: true,
};

export const reducer = createReducer(
  initialState,
  on(UIActions.toggleAppTitle, (state) => {
    return {
      ...state,
      showAppTitle: !state.showAppTitle,
    };
  })
);
