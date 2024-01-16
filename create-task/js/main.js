import  {DOMSelectors} from "./dom.js"

const ToDoItems = []

function addToDo () {
  const inputtedToDo = DOMSelectors.userInput.value
  ToDoItems.push(inputtedToDo)
  console.log(ToDoItems)
  DOMSelectors.toDoList.insertAdjacentHTML("beforeend", 
  `<div class = "to-do-card"></div>`)
 
}

DOMSelectors.addButton.addEventListener("click", addToDo)