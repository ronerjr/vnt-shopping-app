import { Component, OnInit, ViewChild, ComponentRef } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Observable } from 'rxjs/Observable';
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
  item: any;

  constructor(private myShoppingListService: ShoppingListService, public dialog: MatDialog) { }

  ngOnInit() {
    this.createDefaultItem();
    this.myShoppingListService.findAll();
    this.listItems = this.myShoppingListService.listItemFirebase;
  }

  createDefaultItem() {
    this.item = new ShoppingListItem({ name: '', quantity: 0, price: 0.00, disabled: false, key: '' });
    this.accordion.close();
  }

  save() {
    console.log(this.item);
    if (this.item.key) {
      this.myShoppingListService.edit(this.item);
    } else {
      this.myShoppingListService.add(this.item);
    }
    this.createDefaultItem();
  }

  cancel() {
    this.createDefaultItem();
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
