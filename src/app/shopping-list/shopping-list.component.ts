import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  listItems: Array<any>;
  myNewItem: any;

  constructor(private myShoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.createDefaultItem();
    this.listItems = this.myShoppingListService.findAll();
  }

  add() {
    this.myShoppingListService.add(this.myNewItem);
  }

  createDefaultItem() {
    this.myNewItem = new Object({name: '', disabled: false});
  }

}
