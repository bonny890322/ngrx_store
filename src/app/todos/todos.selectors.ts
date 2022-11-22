import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from './todos.reducer';

// 宣告從store取得狀態的方法，每一個方法都被稱為"selector"，可以幫助我們從全域的 Store 狀態中拿到 todos 這個 feature 的狀態
export const selectTodosState = createFeatureSelector<fromTodos.State>( // 讓我們可以從全域的 store 拿到 todos 的 feature 狀態
  fromTodos.todosFeatureKey
);

// 從 feature 物件中取得 isLoading 的狀態內容
export const selectTodoLoading = createSelector(
  selectTodosState,
  (state) => state.isLoading
)

// 取得 todoItems
export const selectTodoItems = createSelector(
  selectTodosState,
  (state) => state.todoItems
);

// 利用 selectTodoItems 來取的總數
export const selectTodoCount = createSelector(
  selectTodoItems,
  (todosItems) => todosItems.length
);

// 傳入多個 Selector，把 Selector 的資料組合在一起
export const selectCurrentTodoCount = createSelector(
  selectTodoItems,
  selectTodoLoading,
  (todosItems, loading) => loading ? -1 : todosItems.length
);

// 依照指定條件作為參數來抓資料
export const selectTodoItemById = (id: number) => createSelector(
  selectTodoItems,
  (todosItems) => todosItems.find((item) => item.id === id)
);

