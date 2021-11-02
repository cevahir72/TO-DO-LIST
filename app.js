const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", clickCheck);

function addTodo(e) {
  //Prevent natural behaviour
  e.preventDefault();
  //Create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Empty Input control
  if (todoInput.value == "") {
    alert("Write something!");
  } else {
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
  }
}

function clickCheck(e) {
  const selectedItem = e.target;
  console.log(selectedItem);
  if (selectedItem.classList[0] === "trash-btn") {
    selectedItem.parentElement.remove();
  }
  if (selectedItem.classList[0] === "complete-btn") {
    selectedItem.parentElement.classList.toggle("completed");
  }
}
