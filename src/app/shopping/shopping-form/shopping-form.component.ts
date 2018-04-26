import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { ShoppingListItem } from '../shopping-list/shopping-list-item/shopping-list-item.model';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent implements OnInit {
  @ViewChild('accordion') accordion: MatExpansionPanel;
  @Input() item: any;
  @Input() cancelButton = true;
  @Output() onSave = new EventEmitter<ShoppingListItem>();
  @Output() onCancel = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  cancel() {
    this.onCancel.emit(true);
  }

  save(event) {
    this.onSave.emit(this.item);
  }

}
