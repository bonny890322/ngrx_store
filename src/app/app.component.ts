import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTodosState, selectTodoLoading, selectTodoItemById, selectTodoItems } from './todos/todos.selectors';

import { loadTodos, loadTodosSuccess, setTodoDone } from './todos/todos.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // 透過 selector 得到我們真正在意的資料
  isLoading$ = this.store.select(selectTodoLoading);
  todoItems$ = this.store.select(selectTodoItems);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {

    // 觀察 Store 狀態變化
    this.store.select(selectTodosState).subscribe(console.log);

    // 此時狀態中的 isLoading 變成 true
    this.store.dispatch(loadTodos());

    // 實際上取得 todos 的邏輯，例如呼叫 API 取得資料

    // 分配 loadTodosSuccess 工作，並將得到的結果傳入
    // 此時狀態中的 todosItems 為傳入的內容，且 isLoading 為 false
    this.store.dispatch(loadTodosSuccess({ items: [{ id: 1, text: 'Task 1', done: false }] }));
  }

}
