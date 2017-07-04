import { Injectable } from '@angular/core';
import { TodoListStorageService } from './todo-list-storage.service';

@Injectable()
export class TodoListService {

  // private todoList = [
  //   { title: 'TodoListService install NodeJS' },
  //   { title: 'TodoListService install Angular CLI' },
  //   { title: 'TodoListService create new app' },
  //   { title: 'TodoListService serve app' },
  //   { title: 'TodoListService develop app' },
  //   { title: 'TodoListService deploy app' },
  // ];

  constructor(private storage: TodoListStorageService) { }

  //   getTodoList() {
  //     return this.todoList;
  //   }

  //   addItem(item): void { 
  //     this.todoList.push(item); 
  // }

  getTodoList() {
    return this.storage.get();
  }

  addItem(item) {
    return this.storage.post(item);
  }

  removeItem(item) {
    return this.storage.destroy(item);
  }
}
