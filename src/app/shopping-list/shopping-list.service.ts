import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
  listItems: Array<any>;

  constructor() {
    this.listItems = [
      {name: 'Bread', disabled: false},
      {name: 'Coffee', disabled: false},
      {name: 'Butter', disabled: false},
      {name: 'Cookies', disabled: true}
    ];
  }

  findAll() {
    return this.listItems;
  }

  add(item){
    this.listItems.unshift(item);
  }

  remove(item) {
    this.listItems.splice(this.listItems.indexOf(item), 1);
  }

  cross(item) {
    this.listItems[this.listItems.indexOf(item)].disabled = true;
  }

}
