const expect = chai.expect;
chai.should();

describe('ShoppingListItem', function() {

  beforeEach(function () {
    item = new ShoppingListItem('apple', 'it is red');
    item.check();
  });

  it('Shopping list should be a Class', function () {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('ShoppingListItem should have a property \'name\'', function () {
    expect(item).to.have.ownProperty('name');

  });

  it('ShoppingListItem should have a property \'description\'', function () {
    expect(item).to.have.ownProperty('description');

  });

  it('ShoppingListItem should have a property \'is_done\'', function () {
    expect(item).to.have.ownProperty('is_done');

  });

  it('ShoppingListItem should have a constructor that sets the properties of \'name\' and \'description\'', function () {
    expect(item.name).to.equal('apple');
    expect(item.description).to.equal('it is red');

  });

  it('ShoppingListItem should have a method named \'check\' that sets the value of \'is_done\' to true', function () {
    expect(ShoppingListItem).to.respondTo('check');
    expect(item.is_done).to.equal(true);
  });



})