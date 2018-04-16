import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  listItems: Observable<any[]>;
  myNewItem: any;
  user: any;

  constructor(private myShoppingListService: ShoppingListService, private authService: AuthService) { }

  ngOnInit() {
    this.initialState();
    this.user = this.authService.getCurrentUser();
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

  logout() {
    this.authService.logout();
  }

}
