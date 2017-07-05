import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-title">
      <span class="todo-item"> {{todoItem.title}}
      <button class="btn round-button" (click)="removeItem()"> 
        X 
      </button></span>
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();
 
  removeItem() {
    this.remove.emit(this.todoItem);
  }
  constructor() { }

  ngOnInit() {
  }
}
