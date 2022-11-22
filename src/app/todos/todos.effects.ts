import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as TodosActions from './todos.actions';


@Injectable()
export class TodosEffects { // 處理 side effect 的操作: 呼叫API、local storage、cookie、cache、提示視窗

  // 宣告 effect 「要怎麼做」
  loadTodoss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(TodosActions.loadTodos), // 當action發生時
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => TodosActions.loadTodosSuccess({ items: [] })),
          catchError(error => of(TodosActions.loadTodosFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) { }
}
