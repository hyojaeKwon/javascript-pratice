const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const toDos = [];

function saveTodos(){
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText="X";
  span.innerText = newTodo;
  toDos.push(newTodo);
  li.appendChild(span);
  li.appendChild(button)
  button.addEventListener("click",deleteTodo);
  todoList.appendChild(li);
  saveTodos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintToDo(newTodo)
}

todoForm.addEventListener("submit", handleToDoSubmit);