; (function () { //Por questões de boas práticas, começamos com ponto e vírgula nas funções auto invocáveis
    "use strict"

    //Armazenar o DOM em variáveis
    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")
    const lis = document.getElementsByTagName("li")    
   
    const AddTask = (task) =>{
        const li = document.createElement("li")
        li.className = "todo-item"
        const p = document.createElement("p")
        p.className = "task-name"
        p.textContent = task
        li.appendChild(p)
        ul.appendChild(li)

        li.addEventListener("click",function(){
            console.log(this)
        })
    }

    todoAddForm.addEventListener("submit", function (event) {
        event.preventDefault()
        // ul.innerHTML += `<li class="todo-item">       
        // <p class="task-name">${itemInput.value}</p>     
        //  </li>`
        AddTask(itemInput.value)

         itemInput.value = ""
         itemInput.focus()

    });

    /*
    Quando formos trabalhar com evento, não podemos utilizar o InnerHTML, pois
    o mesmo perde a referência do evento.
    */
    [...lis].forEach(element => {
        element.addEventListener("click",function(event){
            console.log(this)            
        })
        
    });



})()