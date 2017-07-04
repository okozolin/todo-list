import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <!-- {{itemTitle}} -->
    <span class="todo-item todo-title"> {{todoItem.title}}</span>
    <button class="btn-red" (click)="removeItem()"> 
      remove 
    </button>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  // @Input() itemTitle: string;

  removeItem() {
    this.remove.emit(this.todoItem);
  }
  constructor() { }

  ngOnInit() {
  }
}
