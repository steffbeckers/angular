import { createAction, props } from '@ngrx/store';

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

export interface QueryTodosDto {
  total: number;
  items: QueryTodosItemDto[];
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
