import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@trellis/data';

@Component({
  selector: 'trellis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((todos) => (this.todos = todos));
  }

  addTodo(title: string) {
    this.http.post('/api/add', {
      title
    }).subscribe((todo: Todo) => this.todos.push(todo));
  }

  deleteTodo(todo: Todo) {
    this.http.delete(`/api/delete/${todo.id}`).subscribe((todos: Todo[]) => (this.todos = todos));
  }

  toggleCompleted(todo: Todo) {
    this.http.post('/api/toggle', {
      id: todo.id
    }).subscribe((todos: Todo[]) => (this.todos = todos));
  }
}
