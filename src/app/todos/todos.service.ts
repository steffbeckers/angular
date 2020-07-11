import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// NgRx
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/store';
import * as fromAuth from '../auth/store/reducers/auth.reducer';
import { selectAuthState } from '../auth/store/selectors/auth.selectors';

@Injectable()
export class TodosService {
  private auth$ = this.store.select(selectAuthState);
  private auth: fromAuth.State;

  constructor(private http: HttpClient, private store: Store<fromApp.State>) {
    this.auth$.subscribe((auth) => {
      this.auth = auth;
    });
  }

  loadTodos() {
    return this.http.get(
      'https://squidex.steffbeckers.eu/api/content/angular/todo',
      {
        headers: {
          Authorization: `Bearer ${this.auth.token}`,
        },
      }
    );
  }

  loadExtrasForTodo(todoId: string) {
    return this.http.get(
      // TODO: This isn't working
      `https://squidex.steffbeckers.eu/api/content/angular/todo-extra?$filter=data/todo/iv eq {${todoId}}`,
      {
        headers: {
          Authorization: `Bearer ${this.auth.token}`,
        },
      }
    );
  }
}
