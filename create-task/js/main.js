import  {DOMSelectors} from "./dom.js"
import "../css/style.css"

const ToDoItems = []

function addToDo (event) {
  DOMSelectors.toDoList.innerHTML = ""
  const inputtedToDo = DOMSelectors.userInput.value
  event.preventDefault()
  ToDoItems.push(inputtedToDo);
  displayToDoList()
  DOMSelectors.userInput.value = ""
}

function displayToDoList() {
    ToDoItems.forEach(inputs => {
    DOMSelectors.toDoList.insertAdjacentHTML("beforeend", 
    `<div class="card"><div class = "to-do-card">${inputs}</div>
    <button type ="submit" class="remove-button" id="remove-reminder"> Remove </button>
    </div>`)}
    )
    const removeButton = document.querySelectorAll(".remove-button")
    removeButton.forEach(button => {
      button.addEventListener("click", removeToDo)
    })
    const toDoCard = document.querySelectorAll(".to-do-card")

    function removeToDo () {
      const specificCard = this.parentElement;
      for (let i=0; i<ToDoItems.length; i++) {
        if (ToDoItems[i] === specificCard.innerHTML){ //something wrong here
          ToDoItems.splice(ToDoItems[i])
        }
      }
      // loop thru array and splice if inner html found

      specificCard.innerHTML = ""
    }

}

// function with parameter
// list
// algorithm that includes sequence, selection, and iteration

DOMSelectors.submitButton.addEventListener("click", addToDo)
