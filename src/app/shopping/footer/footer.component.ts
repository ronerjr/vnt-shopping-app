import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  total: number;
  private listItems: any;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.listItemFirebase.subscribe(items => {
      this.total = 0;
      this.listItems = items;
      items.forEach(item => {
        if (!item.disabled) {
          this.total += (item['price'] * item['quantity']);
        }
      });
    });
  }

  finish() {
    this.listItems.forEach(item => {
      item.disabled = true;
      this.shoppingListService.edit(item);
    });
  }

}
