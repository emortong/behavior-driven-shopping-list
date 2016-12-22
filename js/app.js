
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
  renderingResult = newList.render();
  contentDiv.innerHTML = renderingResult;
  document.getElementById('title').value = "";
  document.getElementById('desc').value = "";
}

function changeCheckedStatus(idx, checkbox) {
  var itemsArr = newList.getList();
  var checked = document.getElementById(idx).checked;
  if(checked) {
    itemsArr[idx].check();
    renderingResult = newList.render();
    contentDiv.innerHTML = renderingResult;
  } else {
    itemsArr[idx].uncheck();
    renderingResult = newList.render();
    contentDiv.innerHTML = renderingResult;
  }
}

function removeItemButtonClicked(idx) {
  var itemsArr = newList.getList();
  newList.removeItem(itemsArr[idx]);
  renderingResult = newList.render();
  contentDiv.innerHTML = renderingResult;
}