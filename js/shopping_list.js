
class ShoppingList {
  constructor(){
    this.items = [];
  }

  addItem(shoppingListObject) {
    if(shoppingListObject instanceof (ShoppingListItem)) {
      this.items.push(shoppingListObject);
    } else {
      throw new Error('invalid item');
    }
  }
  removeItem(ShoppingListItem) {
    if(this.items.indexOf(ShoppingListItem) !== -1) {
      this.items.splice(ShoppingListItem, 1);
    } else if(ShoppingListItem === undefined) {
      if(this.items.length !== 0) {
        this.items.pop();
      } //else ??
    } else {
      throw new Error('invalid item');
    }
  }

}