/*
OBJETO - EVENTO
*/

function clicou(){
    console.log("Clicou")
}

let btnEventoNivel0 = document.getElementById("btnEvent1")
let btnEventoNivel2 = document.getElementById("btnEvent2")

btnEventoNivel0.onclick = function(){
    console.log("Atrelando evento - nível 0")
}

btnEventoNivel0.onclick = clicou
/
btnEventoNivel2.addEventListener("click",clicou)
btnEventoNivel2.addEventListener("click", () => console.log("Atrelando evento - nível 2"))


btnEventoNivel2.onclick = () => console.log("Função anônima atrelada ao botão nível 2")


let btnEventoNivel3 = document.getElementById("btnEvent3")
// No exemplo abaixo, vamos parar a propagação de evento. Para isso, podemos incluir
// um parâmetro que pode ser qualquer coisa. No nosso caso estou chamando de event
btnEventoNivel3.addEventListener("click",function(event){
    //Abaixo o comando para parar a propagação de eventos
    //quando chegar no botão 3, para a propagação de eventos    
    event.stopPropagation()
    console.log("Clicou no btnEvento3"), false
}) 

document.addEventListener("click", () => console.log("Clicou no documento"), false)

const container = document.getElementById("container")
container.addEventListener("click", () => console.log("clicou no container"), true)
