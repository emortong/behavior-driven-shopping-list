const expect = chai.expect;
chai.should();

describe('ShoppingListItem', function() {

  beforeEach(function () {
    item = new ShoppingListItem('fruit', 'it is an apple');
  });

  it('Shopping list should be a Class', function () {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('ShoppingListItem should have a property \'name\'', function () {
    expect(item.name).to.equal('fruit');

  });

  it('ShoppingListItem should have a property \'description\'', function () {
    expect(item.description).to.equal('it is an apple');

  });

})