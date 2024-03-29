; (function () { //Por questões de boas práticas, começamos com ponto e vírgula nas funções auto invocáveis
    "use strict"

    //Armazenar o DOM em variáveis
    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")

    //No nosso exemplo, estamos utilizando getElementsBytagName, pois ele mantem
    //sempre o índice atualizado quando criamos uma li dinamicamente.
    const lis = ul.getElementsByTagName("li")

    let  arrayTask = getSavedData()     

   
    function getSavedData(){
        let taskData =  localStorage.getItem("tasks")         
        
        taskData = JSON.parse(taskData)       

        return taskData !==null? taskData: [
        ]
        
    }

    function setNewData(){
        localStorage.setItem("tasks",JSON.stringify(arrayTask))
    }

    function generateLiTask(obj) {

        const li = document.createElement("li")
        const p = document.createElement("p")
        const ckeckButton = document.createElement("button")
        const editIcon = document.createElement("i")
        const deleteIcon = document.createElement("i")

        li.className = "todo-item"

        ckeckButton.className = "button-check"        
        if(obj.completed){
            ckeckButton.innerHTML = '<i class="fas fa-check" data-action="checkButton"><\i>'
        }else{
            ckeckButton.innerHTML = '<i class="fas fa-check displayNone" data-action="checkButton"><\i>'
        }       
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
        inputEdit.setAttribute("type", "text")
        inputEdit.className = "editInput"
        inputEdit.value = obj.name
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

        setNewData()
    }

    const clickedUl = (event) => {

        //Pode ser usado if else, ou switch, porém essa é uma abordagem diferente
        // no lugar de switch ou if else
        //As propriedades precisam ter o mesmo nome do atributo para casar
        //Com a função
        const dataAction = event.target.getAttribute("data-action")

        //Se dataAction for nulo, sai da função
        if (!dataAction) return

        //Código para obter a LI atual
        let currenteLi = event.target
        while (currenteLi.nodeName !== "LI") {
            currenteLi = currenteLi.parentElement
        }

        //retorna o índice da li corrente
        const currentLiIndex = [...lis].indexOf(currenteLi)

        const action = {
            editButton: function () {
                const editContainer = currenteLi.querySelector(".editContainer");               

                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style")
                });

                editContainer.style.display = "flex";
            },
            checkButton: function () {
              
              arrayTask[currentLiIndex].completed = !arrayTask[currentLiIndex].completed       
             
              if(arrayTask[currentLiIndex].completed){
                currenteLi.querySelector(".fa-check").classList.remove("displayNone")                
              }else{
                currenteLi.querySelector(".fa-check").classList.add("displayNone")
              }

              setNewData()
            

              
             
             
             
              
            },
            deleteButton: function () {
                arrayTask.splice(currentLiIndex, 1)
                renderTask()
                setNewData()
            },
            containerEditButton: function(){
                const val = currenteLi.querySelector(".editInput").value
                arrayTask[currentLiIndex].name = val
                renderTask()
                setNewData()
            },
            containerCancelButton: function(){
                currenteLi.querySelector(".editContainer").removeAttribute("style")
                currenteLi.querySelector(".editInput").value =  arrayTask[currentLiIndex].name
            }
        }


        if (action[dataAction]) {
            action[dataAction]()
        }
    }


    todoAddForm.addEventListener("submit", function (event) {
        event.preventDefault()
        addTask(itemInput.value)
        renderTask()
        itemInput.value = ""
        itemInput.focus()
    });


    ul.addEventListener("click", clickedUl)

    renderTask()

})()