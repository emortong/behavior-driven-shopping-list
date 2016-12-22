
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




  //else {
  //   if(itemsChecked.indexOf(checkbox) !== -1){
  //     itemsArr[idx].uncheck();
  //     itemsChecked.splice(checkbox, 1);
  //   }
  // }
  // renderingResult = newList.render();
  // contentDiv.innerHTML = renderingResult;

  // itemsChecked.forEach(function(x) {
  //   x.checked;
  // })


  // console.log(idx, checkbox)
  // var itemsArr = newList.getList();
  // var isChecked = checkbox.checked;
  // console.log(itemsArr[idx].is_done);
  // if(isChecked) {
  //   itemsArr[idx].check();
  //   document.getElementById(idx).checked = true;
  // } else {
  //   itemsArr[idx].uncheck();
  //   document.getElementById(idx).checked = false;
  // }

  // if(itemsArr[idx].is_done) {
  //   document.getElementById(idx).checked = true;
  // } else {
  //   document.getElementById(idx).checked = false;
  // }

}


function removeItemButtonClicked(idx) {
  var itemsArr = newList.getList();
  newList.removeItem(itemsArr[idx]);
  renderingResult = newList.render();
  contentDiv.innerHTML = renderingResult;
}