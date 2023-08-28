//Recupérez les taches par le fichier TODOLIST-JSON
const response = await fetch("todolist.json");
const todoList = await response.json();
console.log(todoList);