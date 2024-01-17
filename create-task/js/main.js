import  {DOMSelectors} from "./dom.js"
import "../css/style.css"

const ToDoItems = []

function addToDo (event) {
  const inputtedToDo = DOMSelectors.userInput.value
  event.preventDefault()
  ToDoItems.push(inputtedToDo);

  ToDoItems.forEach(inputs => {
    DOMSelectors.toDoList.insertAdjacentHTML("beforeend", 
    `<div class = "to-do-card">${inputs}</div>`)
  });
 
}

// if more than 1 to do, put on new line
// add remove button
// check for requirements
DOMSelectors.submitButton.addEventListener("click", addToDo)