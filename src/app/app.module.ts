import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { todosFeatureKey, reducer as todosReducer } from './todos/todos.reducer';
import { TodosComponent } from './compontents/todos/todos.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      { [todosFeatureKey]: todosReducer } // 將 todosReducer 載入，並將得到的資料存到 todos 這個 feature，這時候的 Store 物件內會包含 todos
      , {}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
