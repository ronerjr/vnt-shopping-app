export class ShoppingListItem {
    key: string;
    name: string;
    quantity: number;
    price: number;
    disabled: boolean;

    constructor(object?: Object) {
        Object.assign(this, object);
    }
}
