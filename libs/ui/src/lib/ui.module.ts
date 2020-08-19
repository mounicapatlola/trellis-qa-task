import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoInputComponent } from './todo-input/todo-input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodosComponent, TodoInputComponent],
  exports: [TodosComponent, TodoInputComponent],
})
export class UiModule {}
