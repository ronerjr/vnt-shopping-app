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

  add() {
    this.myShoppingListService.add(this.myNewItem).subscribe(res => {
      this.initialState();
    });
  }

  createDefaultItem() {
    this.myNewItem = new Object({name: '', disabled: false});
  }

  loadData() {
    this.myShoppingListService.findAll().subscribe(response => {
      this.listItems = Object.keys(response).map(id => {
        response[id]['key'] = id;
        return response[id];
      }).reverse();
      console.log(this.listItems);
    });
  }

  initialState() {
    this.createDefaultItem();
    this.loadData();
  }

  itemChanged(event) {
    this.initialState();
  }

}
