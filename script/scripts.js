//Recupérez les taches par le fichier TODOLIST-JSON
const response = await fetch("todolist.json");
const todoList = await response.json();

// Afficher les éléments dans le DOM
for(let index = 0 ; index < todoList.length ; index++){
    const todoItem = todoList[index];
    const todo_list = document.querySelector(".todoList");
    //Creer les elements de la todolist
    const li = document.createElement("li");
    const span = document.createElement("span");
    const buttonEdit = document.createElement("button");
    const buttonDelete = document.createElement("button");
    const inputCheckbox = document.createElement("input");

    //Ajouter du contenue avec innerText
    inputCheckbox.type = "checkbox";
    span.innerText = todoItem.task;
    buttonEdit.innerText = "Edit"
    buttonDelete.innerText = "Delete";

    //Inserer dans le DOM
    li.appendChild(inputCheckbox);
    li.appendChild(span);
    li.appendChild(buttonEdit);
    li.appendChild(buttonDelete);
    todo_list.appendChild(li);

    //Ajouter du style
    todo_list.classList.add("todoList");
    li.classList.add("todoItem");
    buttonEdit.classList.add("todoItemButtons")
    buttonEdit.classList.add("button");
    buttonDelete.classList.add("todoItemButtons")
    buttonDelete.classList.add("button");

}
