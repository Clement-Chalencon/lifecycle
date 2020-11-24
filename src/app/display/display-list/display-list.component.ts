import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, Output, EventEmitter } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit, OnChanges, DoCheck {

  @Input() itemList = [];
  @Output() deleteOut = new EventEmitter();

  items: string[];

  constructor() { }

  deleteItem(event): void {
    this.deleteOut.emit(event);
  }


  /* ---------------------------- liffecycle hooks ---------------------------- */

  ngOnChanges(changes: SimpleChanges): void {
    // const itemList = changes.itemList.currentValue;
    // if (undefined !== itemList) {
    //   this.items = itemList.map((item) => {
    //     item.value = `Item: ${item.id}  Name: ${item.name} Description: ${item.description}`;
    //     return item;
    //   });
    // }
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if (this.items !== this.itemList) {
      this.items = this.itemList.map((item) => {
        item.value = `Item: ${item.id}  Name: ${item.name} Description: ${item.description}`;
        return item;
      });
    }
    // console.log('DoCheck from DisplayListComponent');
  }

}
