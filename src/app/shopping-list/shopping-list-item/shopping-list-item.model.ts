export class ShoppingListItem {
    key: string;
    name: string;
    disabled: boolean;

    constructor(object?: Object) {
        Object.assign(this, object);
    }
}
