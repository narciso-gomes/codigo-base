// Seletores
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener('click', () => {
    const taskText = todoInput.value;
    
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.className = 'todo-item';
    listItem.innerHTML = `
        ${taskText}
        <button class="delete-btn">X</button>
    `;

    listItem.querySelector('.delete-btn').addEventListener('click', () => {
        listItem.remove();
    })

    todoList.appendChild(listItem);
    todoInput.value = "";
})

todoInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') addBtn.click()
})

