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
    if (this.myNewItem.key) {
      this.myShoppingListService.edit(this.myNewItem);
      this.createDefaultItem();
    } else {
      this.myShoppingListService.add(this.myNewItem);
      this.createDefaultItem();
    }
  }

  createDefaultItem() {
    this.myNewItem = new Object({name: '', disabled: false, key: ''});
  }

  initialState() {
    this.createDefaultItem();
    this.listItems = this.myShoppingListService.listItemFirebase;
  }

  editItem(item) {
    Object.assign(this.myNewItem, item);
  }

}
