import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ShoppingListService {
  listItems: Array<any>;

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get(`${environment.firebase.databaseURL}/items.json`);
  }

  add(item) {
    return this.httpClient.post(`${environment.firebase.databaseURL}/items.json`, item);
  }

  remove(item) {
    return this.httpClient.delete(`${environment.firebase.databaseURL}/items/${item.key}.json`, item);
  }

  cross(item) {
    return this.httpClient.put(`${environment.firebase.databaseURL}/items/${item.key}.json`, item);
  }

}
