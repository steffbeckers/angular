import { Component } from '@angular/core';

// NgRx
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/store';
import * as UIActions from 'src/app/store/actions/ui.actions';
import { selectThemeState } from 'src/app/store/selectors/theme.selectors';
import { selectUIState } from 'src/app/store/selectors/ui.selectors';
import { selectAuthState } from './auth/store/selectors/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme$ = this.store.select(selectThemeState);
  ui$ = this.store.select(selectUIState);
  auth$ = this.store.select(selectAuthState);

  title = 'Angular';

  constructor(private store: Store<fromApp.State>) {}

  toggleAppTitle(): void {
    this.store.dispatch(UIActions.toggleAppTitle());
  }
}
