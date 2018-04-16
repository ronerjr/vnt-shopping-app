import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ShoppingListItem } from './shopping-list-item/shopping-list-item.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ShoppingListService {
  listItems: Array<ShoppingListItem[]>;

  listItemFirebase: Observable<ShoppingListItem[]>;
  listItemsRef: AngularFireList<ShoppingListItem[]>;

  constructor(private db: AngularFireDatabase, private authService: AuthService) {
      this.listItems = new Array();
      this.listItemsRef = this.db.list('items');
      this.listItemFirebase = this.listItemsRef.snapshotChanges().map(
          changes => changes.map(c => new ShoppingListItem({
               key: c.payload.key,
               name: c.payload.val()['name'],
               disabled: c.payload.val()['disabled']})));
  }

  add(item) {
    delete item.key;
    this.listItemsRef.push(item);
  }

  remove(item) {
    this.listItemsRef.remove(item.key);
  }

  edit(item) {
    const key = item.key;
    delete item.key;
    this.listItemsRef.update(key, item);
  }

}
