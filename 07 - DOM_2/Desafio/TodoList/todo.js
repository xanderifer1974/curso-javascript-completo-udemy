const ULtarefasAFazer = document.querySelectorAll("ul")[0]
const ULtarefasFeitas = document.querySelectorAll("ul")[1]
const LITarefas = ULtarefasAFazer.querySelectorAll("li")

const listaTarefas = []

LITarefas.forEach(function (li) {

    li.childNodes.forEach(function (node) {
        if (node.nodeType === 3) {

            if (node.nodeValue !== "\n            ") {

                listaTarefas.push(node.nodeValue.replace("\n","").trim());
            }
        }
    });
});


function criarLi(tarefa){
    const li = document.createElement("li")
    const tarefaAFazer = document.createTextNode(tarefa)
    li.appendChild(tarefaAFazer)

    return li
}

function AdicionarTarefa(tarefa,indice){

    let tarefaFeita = criarLi(tarefa)

    ULtarefasFeitas.appendChild(tarefaFeita)

    LITarefas[indice].remove()
}

const btnTarefa1 = document.getElementById("tarefa1")
const btnTarefa2 = document.getElementById("tarefa2")
const btnTarefa3 = document.getElementById("tarefa3")
const btnTarefa4 = document.getElementById("tarefa4")

console.log(btnTarefa1)

btnTarefa1.addEventListener("click", function(){
    var param2 = listaTarefas[0];
    var param3 = 0;
    AdicionarTarefa(param2, param3)
});

btnTarefa2.addEventListener("click", function(){
    var param2 = listaTarefas[1];
    var param3 = 1;
    AdicionarTarefa(param2, param3)
});

btnTarefa3.addEventListener("click", function(){
    var param2 = listaTarefas[2];
    var param3 = 2;
    AdicionarTarefa(param2, param3)
});

btnTarefa4.addEventListener("click", function(){
    var param2 = listaTarefas[3];
    var param3 = 3;
    AdicionarTarefa(param2, param3)
});




