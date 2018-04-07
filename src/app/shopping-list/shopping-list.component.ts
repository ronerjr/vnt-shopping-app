import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  listItems: Object;
  myNewItem: any;

  constructor(private myShoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.initialState();
  }

  save() {
    console.log(this.myNewItem);
    if (this.myNewItem.key) {
      this.myShoppingListService.edit(this.myNewItem).subscribe(res => {
        this.initialState();
      });
    } else {
      this.myShoppingListService.add(this.myNewItem).subscribe(res => {
        this.initialState();
      });
    }
  }

  createDefaultItem() {
    this.myNewItem = new Object({name: '', disabled: false, key: ''});
  }

  loadData() {
    this.myShoppingListService.findAll().subscribe(response => {
      this.listItems = Object.keys(response).map(id => {
        response[id]['key'] = id;
        return response[id];
      }).reverse();
    });
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
