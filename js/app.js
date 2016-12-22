
var newList = new ShoppingList();
var renderingResult = newList.render();

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

var itemsChecked = [];
var itemsArr = newList.getList();

function changeCheckedStatus(idx, checkbox) {


  var isChecked = checkbox.checked;
  if(isChecked) {
    newList.items[idx].check();
  } else {
    newList.items[idx].uncheck();
  }

}


function removeItemButtonClicked(idx) {
  var itemsArr = newList.getList();
  newList.removeItem(itemsArr[idx]);
  renderingResult = newList.render();
  contentDiv.innerHTML = renderingResult;
}