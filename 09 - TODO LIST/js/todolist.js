; (function () { //Por questões de boas práticas, começamos com ponto e vírgula nas funções auto invocáveis
    "use strict"

    //Armazenar o DOM em variáveis
    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")


    let arrayTask = [
        
    ]

    // const addEventLi = (li) => {
    //     li.addEventListener("click", function (event) {
    //         console.log(this)
    //     })
    // }

    function generateLiTask(obj) {

        const li = document.createElement("li")
        const p = document.createElement("p")
        const ckeckButton = document.createElement("button")
        const editIcon = document.createElement("i")
        const deleteIcon = document.createElement("i")
        
        li.className = "todo-item"
        
        ckeckButton.className = "button-check"
        ckeckButton.innerHTML = '<i class=\"fas fa-ckeck displayNone\"><\i>'
        ckeckButton.setAttribute("data-action", "checkButton") //Atributo criado para saber a ação, não é um atributo nativo
        li.appendChild(ckeckButton)

        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)


        editIcon.className = "fas fa-edit"
        editIcon.setAttribute("data-action", "editButton")
        li.appendChild(editIcon)

        const containerEdit = document.createElement("div")
        containerEdit.className = "editContainer"
        const inputEdit = document.createElement("input")
        inputEdit.setAttribute("type","text")
        inputEdit.className = "editInput"
        containerEdit.appendChild(inputEdit)
        const containerEditButton = document.createElement("button")
        containerEditButton.className = "editButton"
        containerEditButton.textContent = "Edit"
        containerEditButton.setAttribute("data-action", "containerEditButton")
        containerEdit.appendChild(containerEditButton)
        const containerCancelButton = document.createElement("button")
        containerCancelButton.className = "cancelButton"
        containerCancelButton.textContent = "Cancel"
        containerCancelButton.setAttribute("data-action", "containerCancelButton")
        containerEdit.appendChild(containerCancelButton)

        li.appendChild(containerEdit)

        deleteIcon.className = "fas fa-trash-alt"
        deleteIcon.setAttribute("data-action", "deleteButton")
        li.appendChild(deleteIcon)
        
        // addEventLi(li)

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

    const clickedUl =(event) =>
    {
        console.log(event.target)
        console.log(event.target.getAttribute("data-action"))
    }


    todoAddForm.addEventListener("submit", function (event) {
        event.preventDefault()
        addTask(itemInput.value)
        renderTask()
        itemInput.value = ""
        itemInput.focus()
    });


    ul.addEventListener("click",clickedUl)

    renderTask()

})()