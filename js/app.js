
var newList = new ShoppingList();
var renderingResult = newList.render();
console.log(renderingResult);

var contentDiv = document.getElementById('content');
console.log(contentDiv)
contentDiv.innerHtml = renderingResult;

function add_to_shopping_list() {
  var title = document.getElementById('title').value;
  var desc = document.getElementById('desc').value;
  var new_shopping_list_item = new ShoppingListItem(title, desc);
  newList.addItem(new_shopping_list_item)
  console.log(newList.items)
  renderingResult = newList.render();
  contentDiv.innerHTML = renderingResult;
}