import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectThemeState } from 'src/app/store/selectors/theme.selectors';
import * as ThemeActions from 'src/app/store/actions/theme.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  theme$ = this.store.select(selectThemeState);
  selectedTheme: string = null;

  constructor(private store: Store) {
    this.theme$.subscribe((theme) => {
      this.selectedTheme = theme.current;
    });
  }

  ngOnInit(): void {}

  selectTheme(): void {
    this.store.dispatch(
      ThemeActions.selectTheme({ selectedTheme: this.selectedTheme })
    );
  }
}
