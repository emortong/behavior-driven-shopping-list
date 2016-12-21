const expect = chai.expect;
chai.should();

describe('ShoppingListItem', function() {

  beforeEach(function () {
    item = new ShoppingListItem('apple', 'it is red');
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
    item.check();
    expect(ShoppingListItem).to.respondTo('check');
    expect(item.is_done).to.equal(true);
  });

  it('ShoppingListItem should have a method named \'uncheck\' that sets the value of \'is_done\' to false', function () {
    item.uncheck();
    expect(ShoppingListItem).to.respondTo('uncheck');
    expect(item.is_done).to.equal(false);
  });

  it('ShoppingListItem should have a method named \'render\' that construct and return an html formatted string. the string content are wrapped in <li> tags', function () {
    expect(ShoppingListItem).to.respondTo('render');
    expect(item.render()).to.equal('<li class="completed_false"><span>apple</span><span>it is red</span></li>');
  });



})