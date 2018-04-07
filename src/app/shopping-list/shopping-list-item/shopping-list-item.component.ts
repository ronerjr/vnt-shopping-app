import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
  @Input('item') item: any;

  constructor(private myShoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  remove() {
    this.myShoppingListService.remove(this.item);
  }

  cross() {
    this.myShoppingListService.cross(this.item);
  }

}