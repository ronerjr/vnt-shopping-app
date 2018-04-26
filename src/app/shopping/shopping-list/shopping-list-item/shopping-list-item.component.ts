import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { ShoppingListOptionsComponent } from '../shopping-list-options/shopping-list-options.component';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
  @Input('item') item: any;

  constructor() { }

  ngOnInit() {
  }

}
