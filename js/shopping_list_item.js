class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check(){
    this.is_done = true;
  }

  uncheck(){
    this.is_done = false;
  }

  render(idx){
    var idx = idx;
    var checked = "";
    if(this.is_done) {
      checked = "checked='checked' ";
    }
    return `<li class="completed_${this.is_done}"><span>${this.name}</span><span> ${this.description}</span><input type="checkbox" id="${idx}" ${checked} onchange="changeCheckedStatus(${idx}, this)"><button label="x" onclick="removeItemButtonClicked(${idx})">X</button></li>`;
  }
}
