import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
    <h1>
      {{title +10}} {{anothervar | uppercase}}
    </h1>
    <!--<todo-input></todo-input> -->
    <todo-input class="todo-app" (submitValue)="addItem($event)"></todo-input>
    <ul>
      <li *ngFor="let item of todoList">
        <!--{{ item.title }}-->
        <!--<todo-item [itemTitle]="item.title"></todo-item> -->
        <todo-item class="todo-add" [todoItem]="item" (remove)="removeItem($event)"></todo-item>
      </li>
    </ul>
    <h1 *ngIf="userLoggedIn">Welcome!</h1>
  `,
  styleUrls: ['./list-manager.component.css']
})

export class ListManagerComponent implements OnInit {
  title: string = 'todo works!';
  anothervar = 'orit-anothervar';
  todoList: any = [];

  // addItem(title: string): void {
  //   this.todoList.push({ title });
  // }
  // addItem(item): void { 
  //     this.todoListService.addItem(item); 
  // }
  addItem(title: string) {
    this.todoList = this.todoListService.addItem({ title });
  }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }
  // todoList = [
  //   { title: 'install NodeJS' },
  //   { title: 'install Angular CLI' },
  //   { title: 'create new app' },
  //   { title: 'serve app' },
  //   { title: 'develop app' },
  //   { title: 'deploy app' },
  // ];

  userLoggedIn: boolean = true;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

}
