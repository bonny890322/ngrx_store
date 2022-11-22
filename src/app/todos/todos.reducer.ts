import { Action, createReducer, on } from '@ngrx/store';
import * as TodosActions from './todos.actions';

export const todosFeatureKey = 'todos';

export interface State { // 這個 feature 這個狀態下的型別定義
  isLoading: boolean;
  todoItems: Array<{
    id: number;
    text: string;
    done: boolean;
  }>;
}

export const initialState: State = { // 定義這個 feature 的預設值
  isLoading: false,
  todoItems: [
    {
      id: 1,
      text: 'Task 1',
      done: true
    },
    {
      id: 2,
      text: 'Task 2',
      done: false
    }
  ]
};

export const reducer = createReducer( // 宣告「怎麼做」，要怎麼改變 Store 的資料
  initialState,

  on(TodosActions.loadTodos, state => ({
    ...state,
    isLoading: true
  })), // 裡面會指定 Action 和一個 callback function
  on(TodosActions.loadTodosSuccess, (state, action) => ({
    ...state,
    todoItems: [...action.items],
    isLoading: false,
  })),
  on(TodosActions.loadTodosFailure, (state, action) => state),

);
