import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  listItems: Array<any>;
  myNewItem = new Object({});

  constructor(private myShoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.myNewItem = {name: '', disabled: false};
    this.listItems = this.myShoppingListService.findAll();
  }

  add() {
    console.log(this.myNewItem);
    this.myShoppingListService.add(this.myNewItem);
  }

}
