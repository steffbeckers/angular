import { createAction, props } from '@ngrx/store';

export const selectTheme = createAction('[Theme] Select theme', props<{ selectedTheme: string }>());
