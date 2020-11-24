import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  exampleItem = { id: 1, name: 'ItemForExample', description: 'This is just the first item for exemple' };
  items = new BehaviorSubject(this.exampleItem);
  totalItems: any[] = [this.exampleItem];

  constructor() {
    this.items.next(this.totalItems[0]);
  }

  setDeletedItems(deletedItem: any): void {
    this.totalItems = this.totalItems.filter(item => item.id !== deletedItem.id);
  }

  addItems(item: any): void {
    const totalItemsLength = this.totalItems.length;
    item.id = totalItemsLength + 1;
    this.totalItems.push(item);
    this.items.next(item);
  }



}
