import { createAction, props } from '@ngrx/store';

// 定義「行為」
export const loadTodos = createAction(
  '[Todos] Load Todoss'
);

export const loadTodosSuccess = createAction(
  '[Todos] Load Todos Success',
  props<{ items: Array<{ id: number; text: string; done: boolean }> }>() // 代表宣告一個可以被傳入的屬性物件，且為指定的型別定義，之後要呼叫這個 Action 時，就必須要照宣告的型別傳入參數
);

export const loadTodosFailure = createAction(
  '[Todos] Load Todoss Failure',
  props<{ error: any }>()
);

export const setTodoDone = createAction(
  '[Todos] Set Todo Item Done',
  props<{
    payload: {
      id: number,
      // 透過包一個 payload，想使用 type 屬性就沒有限制了
      type: string
    }
  }>()
)
