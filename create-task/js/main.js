import  {DOMSelectors} from "./dom.js"
import "../css/style.css"

const ToDoItems = []
const updatedToDoItems = []

function addToDo (event) {
  const inputtedToDo = DOMSelectors.userInput.value
  event.preventDefault()
  ToDoItems.push(inputtedToDo);

  for (i=0; i<ToDoItems.length; i++){
    if (ToDoItems[i].includes(ToDoItems[i+1])){
  // if it's already displayed, dont for each it
  // if more than 1 to do, put on new line
    }
    else {
      updatedToDoItems.push()
      updatedToDoItems.forEach(inputs => {
        DOMSelectors.toDoList.insertAdjacentHTML("beforeend", 
        `<div class="card"><div class = "to-do-card">${inputs}</div>
        <button type ="submit" class="remove-button" id="remove-reminder"> Remove </button>
        </div>`)})
    }
  }  
}

function removeToDo () {

}

// add remove button
// check for requirements

DOMSelectors.submitButton.addEventListener("click", addToDo)
DOMSelectors.removeButton.addEventListener("click", removeToDo)