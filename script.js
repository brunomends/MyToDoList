// getting values of html elements
let addButton = document.getElementById("add-button")
let clearCompletedButton = document.getElementById("clear-completed-button")
let emptyButton = document.getElementById("empty-button")
let saveButton = document.getElementById("save-button")
let toDoEntryBox = document.getElementById("todo-entry-box")
let toDoList = document.getElementById("todo-list")

// add listeners
addButton.addEventListener("click", addToDoItem)
clearCompletedButton.addEventListener("click", clearCompletedToDoItem)
emptyButton.addEventListener("click", emptyToDoItem)
saveButton.addEventListener("click", saveList)

// Creat functions buttons 
function addToDoItem(){
    let itemText = toDoEntryBox.value
    newToDoItem(itemText, false)
}

function clearCompletedToDoItem(){
    let completedItems = toDoList.getElementsByClassName("completed")

    while (completedItems.length > 0){
        completedItems.item(0).remove()
    }
}

function emptyToDoItem(){
    let toDoItems = toDoList.children

    while(toDoItems.length > 0){
        toDoItems.item(0).remove()
    }
}

function saveList(){
    let toDos = []

    for (let i = 0; i < toDoList.children.length; i++){
        let toDo = toDoList.children.item(i)

        let toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        }

        toDos.push(toDoInfo)
    }

    localStorage.setItem("toDos", JSON.stringify(toDos))
}

function loadList(){
    if(localStorage.getItem("toDos") != null){
        let toDos = JSON.parse(localStorage.getItem("toDos"))

        for (let i = 0; i < toDos.length; i++){
            let toDo = toDos[i]
            newToDoItem(toDo.task, toDo.competed)
        }
    }
}

loadList()

function newToDoItem(itemText, completed) {
    let toDoItem = document.createElement("li")
    let toDoText = document.createTextNode(itemText)
    toDoItem.appendChild(toDoText)

    if(completed){
        toDoItem.classList.add("completed")
    }

    toDoList.appendChild(toDoItem)
    toDoItem.addEventListener("dblclick", toggleToDoItemState)

    toDoEntryBox.value=""
}

function toggleToDoItemState(){
    if (this.classList.contains("completed")){
        this.classList.remove("completed")
    }else {
        this.classList.add("completed")
    }
}

let myArray = []
myArray.push("something to store")
myArray.push("something else to store")
alert(myArray[0])

let toDoInfo = {
    "task": "Thing i need to do",
    "competed": false
}
