
describe('ShoppingListItem', function() {

  let item;
  beforeEach(function () {
   item = new ShoppingListItem('apple', 'it is red');
  });

  it('ShoppingListItem should be a Class', function () {
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
    expect(item).to.respondTo('check');
    expect(item.is_done).to.equal(true);
  });

  it('ShoppingListItem should have a method named \'uncheck\' that sets the value of \'is_done\' to false', function () {
    item.uncheck();
    expect(item).to.respondTo('uncheck');
    expect(item.is_done).to.equal(false);
  });

  it('ShoppingListItem should have a method named \'render\' that construct and return an html formatted string. the string content are wrapped in <li> tags', function () {
    expect(item).to.respondTo('render');
    expect(item.render()).to.equal('<li class="completed_false"><span>apple</span><span> it is red</span><input type="checkbox" id="undefined" onchange="changeCheckedStatus(undefined, this)"><button label="x" onclick="removeItemButtonClicked(undefined)">X</button></li>');
  });
})


