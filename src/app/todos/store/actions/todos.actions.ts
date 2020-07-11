import { createAction, props } from '@ngrx/store';

export interface QueryTodosDto {
  total: number;
  items: QueryTodosItemDto[];
}

export interface QueryTodosItemDto {
  id: string;
  data: {
    title: {
      iv: string;
    };
    description: {
      iv: string;
    };
    done: {
      iv: boolean;
    };
  };
  version: number;
  created: Date;
  createdBy: string;
  lastModified: Date;
  lastModifiedBy: string;
  status: string;
}

export interface QueryTodoExtrasDto {
  total: number;
  items: QueryTodoExtrasItemDto[];
}

export interface QueryTodoExtrasItemDto {
  id: string;
  data: {
    title: {
      iv: string;
    };
  };
  version: number;
  created: Date;
  createdBy: string;
  lastModified: Date;
  lastModifiedBy: string;
  status: string;
}

export interface Todo {
  id: string;
  title: string;
  description: string;
  done: boolean;
  version: number;
  created: Date;
  createdBy: string;
  lastModified: Date;
  lastModifiedBy: string;
  status: string;
  extras?: TodoExtra[];
}

export interface TodoExtra {
  title: string;
}

export const loadTodos = createAction('[Todos] Load todos');
export const loadTodosSuccess = createAction(
  '[Todos] Load todos Success',
  props<QueryTodosDto>()
);
export const loadTodosFailure = createAction(
  '[Todos] Load todos Failure',
  props<any>()
);

export const loadTodoExtras = createAction(
  '[Todos] Load todo extras',
  props<QueryTodosItemDto>()
);
export const loadTodoExtrasSuccess = createAction(
  '[Todos] Load todo extras Success',
  props<QueryTodoExtrasDto>()
);
export const loadTodoExtrasFailure = createAction(
  '[Todos] Load todo extras Failure',
  props<any>()
);

export const selectTodo = createAction('[Todos] Select todo', props<Todo>());
