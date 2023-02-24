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


