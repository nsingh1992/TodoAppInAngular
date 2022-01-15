import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title!: string;
  desc!: string;
  @Output() addTodo : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("inside onsubmit",this.title, this.desc);
    const todo = {
      sno: 5,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.addTodo.emit(todo);

  }

}
