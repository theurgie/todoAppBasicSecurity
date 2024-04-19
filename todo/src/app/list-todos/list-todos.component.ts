import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  message = ''
  todos: Todo[];

  constructor(
    private todoService:TodoDataService,
    private router : Router
    ) { }

  ngOnInit() {
    this.refreshTdos();
  }

  refreshTdos() {
    this.todoService.retrieveAllTodos('user').subscribe(
      response => {
        console.log(response)
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`delete Todo ${id}`)
    this.todoService.deleteTodo('user', id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete of Todo ${id} successful!`;
        this.refreshTdos();
      }
    );
  }

  updateTodo(id) {
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo() {
    this.router.navigate(['todos',-1])
  }
  

}
