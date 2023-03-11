; (function () { //Por questões de boas práticas, começamos com ponto e vírgula nas funções auto invocáveis
    "use strict"

    //Armazenar o DOM em variáveis
    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")


    let arrayTask = [
        
    ]

    const addEventLi = (li) => {
        li.addEventListener("click", function (event) {
            console.log(this)
        })
    }

    function generateLiTask(obj) {

        const li = document.createElement("li")
        li.className = "todo-item"
        const p = document.createElement("p")
        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)
        addEventLi(li)

        return li

    }

    function renderTask() {
        ul.innerHTML = ""
        arrayTask.forEach(task => {
            ul.appendChild(generateLiTask(task))

        });
    }

    const addTask = (task) => {

        arrayTask.push({
            name: task,
            createAt: Date.now().toLocaleString("pt-BR"),
            completed: true
        })
    }



    todoAddForm.addEventListener("submit", function (event) {
        event.preventDefault()
        addTask(itemInput.value)
        renderTask()
        itemInput.value = ""
        itemInput.focus()
    });

    renderTask()

})()