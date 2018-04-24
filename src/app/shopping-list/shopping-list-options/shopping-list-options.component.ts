import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-options',
  templateUrl: './shopping-list-options.component.html',
  styleUrls: ['./shopping-list-options.component.css']
})
export class ShoppingListOptionsComponent implements OnInit {

  constructor(
    private myShoppingListService: ShoppingListService,
    public dialogRef: MatDialogRef<ShoppingListOptionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
  }

  remove() {
    console.log(this.data);
    this.myShoppingListService.remove(this.data);
    this.dialogRef.close();
  }

  cross() {
    this.data.disabled = true;
    this.myShoppingListService.edit(this.data);
    this.dialogRef.close();
  }

}
