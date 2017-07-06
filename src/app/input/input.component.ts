import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
      <input  class="todo-input" [value]="title" 
             (keyup.enter)="changeTitle(inputElement)"#inputElement>
      <button class="btn btn-add"  (click)="changeTitle(inputElement)">Add</button>      
  `,
  styleUrls: ['./input.component.css']
})
  
export class InputComponent implements OnInit {
  title: string = "Orit";
  @Output() submitValue: EventEmitter<string> = new EventEmitter();

  changeTitle(newTitle): void {
    this.submitValue.emit(newTitle.value);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
