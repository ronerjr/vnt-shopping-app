import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  listItems: Observable<any[]>;
  myNewItem: any;

  constructor(private myShoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.initialState();
  }

  save() {
    console.log(this.myNewItem);
    if (this.myNewItem.key) {
      this.myShoppingListService.edit(this.myNewItem);
    } else {
      this.myShoppingListService.add(this.myNewItem);
    }
  }

  createDefaultItem() {
    this.myNewItem = new Object({name: '', disabled: false, key: ''});
  }

  loadData() {
    this.listItems = this.myShoppingListService.listItemFirebase;
  }

  initialState() {
    this.createDefaultItem();
    this.loadData();
  }

  itemChanged(event) {
    this.initialState();
  }

  editItem(item) {
    Object.assign(this.myNewItem, item);
  }

}
