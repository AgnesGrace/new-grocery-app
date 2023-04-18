const ul = document.querySelector("#item-list");
const form = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const quantity = document.querySelector("#quantity-input");
const clear = document.querySelector("#clear");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = itemInput.value;
  const qty = quantity.value;
  if (item === "" || qty === "") {
    document.querySelector(".hidden").style.display = "block";
    return;
  }
  formEl(item, qty);
  console.log(ul.firstChild);
  form.reset();
});

function formEl(item, quantity) {
  const li = document.createElement("li");
  const p1 = document.createElement("p");
  p1.appendChild(document.createTextNode(item));
  const p2 = document.createElement("p");
  p2.appendChild(document.createTextNode(quantity));
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  li.appendChild(p1);
  li.appendChild(p2);
  li.appendChild(checkBox);
  const btn = buttonEl("remove-item btn-link text-red");
  li.appendChild(btn);
  //console.log(li.firstChild);
  console.log(li.children);
  ul.appendChild(li);
}

function buttonEl(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = iconEl("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function iconEl(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}
// deleting each item event delegation
function deleteItem(e) {
  const classes = e.target.parentElement.classList;

  if (classes.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }
}
//putting a line through
function cross(e) {
  if (e.target.type === "checkbox") {
    const checkbox = e.target;
    const items = checkbox.parentElement;
    if (checkbox.checked) {
      items.style.textDecoration = "line-through";
      items.style.fontWeight = "400";
    } else {
      items.style = "none";
    }
  }
}
ul.addEventListener("click", cross);
ul.addEventListener("click", deleteItem);
clear.addEventListener("click", () => (ul.textContent = ""));
