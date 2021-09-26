const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; // toDoInput.value 값을 변수에 저장
  toDoInput.value = ""; // toDoInput.value 값에 빈값 저장 > 이때 변수에는 값이 저장되어 있음!
  toDos.push(newToDo);
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
