const expect = chai.expect;
chai.should();

describe('ShoppingListItem', function() {

  beforeEach(function () {
    item = new ShoppingListItem('fruit');
  });

  it('Shopping list should be a Class', function () {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('ShoppingListItem should have a property \'name\'', function () {
    expect(item.name).to.equal('fruit');

  });

})