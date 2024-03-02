let titleField = document.getElementById("title-input")
let subtitleField = document.getElementById("subtitle-input")
let createBtn = document.getElementById("task-creation")
let deleteBtn = document.getElementById("reset-tasks")
let taskParent = document.getElementById("tasks")

let taskList = []

createBtn.onclick = function () {
    let titleText = titleField.value
    let subtitleText = subtitleField.value
    if (titleText === "" || subtitleText === "") {
        alert("One or more fields are still empty!")
    } else {
        let taskBlock = document.createElement("div")
        taskList.push(taskBlock)
        taskBlock.className = "task-block"
        taskBlock.id = `task-${taskList.length}`
        let fixedHTML = `
                        <div class="head">
                            <h4 id="task-title-${taskList.length}">${titleText}</h4>
                            <span id="task-subtitle-${taskList.length}">${subtitleText}</span>
                        </div>
                        <input type="button" value="Delete Item" class="delete-task-button" id="delete-task-${taskList.length}">
                        ` 
        taskBlock.innerHTML = fixedHTML
        taskParent.appendChild(taskBlock)
    }
}

deleteBtn.onclick = function () {
    for (i = 0; i < taskList.length; i) {
        taskParent.children[i].remove()
        taskList[i].remove()
    }
}

document.addEventListener("click", function (e) {
    if (e.target.className === "delete-task-button") {
        e.target.parentElement.remove()
    }
})