import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingListOptionsComponent } from './shopping-list-options/shopping-list-options.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  listItems: Observable<any[]>;
  myNewItem: any;
  user: any;

  constructor(private myShoppingListService: ShoppingListService, private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    this.initialState();
    this.myShoppingListService.findAll();
    this.listItems = this.myShoppingListService.listItemFirebase;
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

  openDialog(item) {
    console.log(item);
    const dialogRef = this.dialog.open(ShoppingListOptionsComponent, {
      data: {
        animal: 'panda'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
