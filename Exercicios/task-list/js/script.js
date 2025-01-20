// Seletores
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener('click', () => {
    const taskText = todoInput.value;
    
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${taskText}
        <button>X</button>
    `;

    todoList.appendChild(listItem);
    todoInput.value = "";
})


