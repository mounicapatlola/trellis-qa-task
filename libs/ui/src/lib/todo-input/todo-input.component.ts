import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'trellis-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Output() newTodo: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(text: HTMLInputElement) {
    this.newTodo.emit(text.value);
    text.value = '';
  }
}
