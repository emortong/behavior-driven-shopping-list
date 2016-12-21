const expect = chai.expect;
chai.should();

describe('ShoppingListItem', function() {

  // beforeEach(function(){
  //   shoppingListItem = new ShoppingListItem();
  // })
  it('Shopping list should be a Class', function () {
    expect(ShoppingListItem).to.be.a('function');

  });

})