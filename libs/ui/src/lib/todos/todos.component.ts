import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Todo } from '@trellis/data';

@Component({
  selector: 'trellis-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];
  
  @Output() toggle: EventEmitter<Todo> = new EventEmitter();
  @Output() delete: EventEmitter<Todo> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleCompleted(todo: Todo) {
    this.toggle.emit(todo);
  }

  deleteTodo(todo: Todo) {
    this.delete.emit(todo);
  }
}
