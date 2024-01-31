import  {DOMSelectors} from "./dom.js"
import "../css/style.css"

const ToDoItems = []

function addToDo (event) {
  DOMSelectors.toDoList.innerHTML = ""
  DOMSelectors.userInput.value = ""
  const inputtedToDo = DOMSelectors.userInput.value
  event.preventDefault()
  ToDoItems.push(inputtedToDo);
  displayToDoList()
}

function displayToDoList() {
    ToDoItems.forEach(inputs => {
    DOMSelectors.toDoList.insertAdjacentHTML("beforeend", 
    `<div class="card"><div class = "to-do-card">${inputs}</div>
    <button type ="submit" class="remove-button" id="remove-reminder"> Remove </button>
    </div>`)}
    )
    const toDoCard = document.querySelectorAll(".to-do-card")

    function removeToDo () {
      toDoCard.innerHTML = ""
    }

    DOMSelectors.removeButton.addEventListener("click", removeToDo)
}

// function with parameter
// list
// algorithm that includes sequence, selection, and iteration

DOMSelectors.submitButton.addEventListener("click", addToDo)
