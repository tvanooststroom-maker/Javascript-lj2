const shop = document.querySelector("#shop")
const input = document.querySelector("#shop-input")
const btn = document.querySelector("#button")
const counter = document.querySelector("#counter")
const list = document.querySelector("#list")

const updateCounter = () => {
  const itemCount = document.querySelectorAll("#list li").length;
  const checkedCount = document.querySelectorAll(
    '#list input[type="checkbox"]:checked'
  ).length;

  counter.textContent = `${itemCount} items, ${checkedCount} checked`;
};

shop.addEventListener("submit", (event) => {
  event.preventDefault();

const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  li.append(checkbox, ` ${text}`);
  
const deleteButton = document.createElement("button");
deleteButton.type = "button";
deleteButton.textContent = "Delete";

deleteButton.addEventListener("click", () => {
  li.remove();
  updateCounter();
});
li.append(checkbox, deleteButton);
list.append(li);

list.addEventListener("change", updateCounter);
updateCounter();
  input.value = "";
  updateCounter();
});
