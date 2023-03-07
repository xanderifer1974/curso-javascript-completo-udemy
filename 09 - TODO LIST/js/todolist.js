; (function () { //Por questões de boas práticas, começamos com ponto e vírgula nas funções auto invocáveis
    "use strict"

    //Armazenar o DOM em variáveis
    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")

    todoAddForm.addEventListener("submit", function (event) {
        event.preventDefault()
        ul.innerHTML += `<li class="todo-item">       
        <p class="task-name">${itemInput.value}</p>     
         </li>`

         itemInput.value = ""
         itemInput.focus()

    })



})()