import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  
  todos!:Todo[];
  constructor() { 
    let item = localStorage.getItem("todos");
    if(item==null){
    this.todos=[]
  }else{
    this.todos = JSON.parse(item);
  }
}

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    this.todos.splice(this.todos.indexOf(todo),1);
    console.log("deleted");
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log("neha",todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active ;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
