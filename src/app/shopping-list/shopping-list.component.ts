import { Component, OnInit, ViewChild, ComponentRef } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingListOptionsComponent } from './shopping-list-options/shopping-list-options.component';
import { MatExpansionPanel } from '@angular/material/expansion';
import { ShoppingListItem } from './shopping-list-item/shopping-list-item.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @ViewChild('accordion') accordion: MatExpansionPanel;
  listItems: Observable<any[]>;
  myNewItem: any;
  user: any;

  constructor(private myShoppingListService: ShoppingListService, private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.initialState();
    this.user = this.authService.getCurrentUser();
    this.myShoppingListService.findAll();
    this.listItems = this.myShoppingListService.listItemFirebase;
  }

  cancel() {
    this.createDefaultItem();
  }

  save() {
    console.log(this.myNewItem);
    if (this.myNewItem.key) {
      this.myShoppingListService.edit(this.myNewItem);
      this.createDefaultItem();
    } else {
      this.myShoppingListService.add(this.myNewItem);
      this.createDefaultItem();
    }
  }

  createDefaultItem() {
    this.myNewItem = new ShoppingListItem({ name: '', quantity: 0, price: 0.00, disabled: false, key: '' });
    this.accordion.close();
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
      disableClose: true, data: item, width: '80%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
