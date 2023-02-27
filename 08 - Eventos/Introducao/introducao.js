/*
Na manipulação de eventos nível 0, ou atrelando o evento pelo HTML ou atráves do javascript,
somente podemos atrelar um único evento ao elemento
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

//No caso acima, o último evento sobrescreveu o primeiro.

//Já utilizando o EventListener, podemos atrelar mais de um evento

btnEventoNivel2.addEventListener("click",clicou)
btnEventoNivel2.addEventListener("click", () => console.log("Atrelando evento - nível 2"))

//Ainda é possível colocar um função nível 2

btnEventoNivel2.onclick = () => console.log("Função anônima atrelada ao botão nível 2")

//Propagação de Eventos => pode ser fase, de cima para baixo ou borbulhamento de baixo para cima.
//O padrão é borbulhamento. Neste caso, o valor padrão do 3 parâmetro é false não havendo necessidade de 
//Informar.

let btnEventoNivel3 = document.getElementById("btnEvent3")

// Este padrão é de borbulhamento. O envento propaga do botão, até chegar no document.
//Porém se colocamos o terceiro parâmetro com true, o evento irá se propagar do document
//até chegar no botão
btnEventoNivel3.addEventListener("click",function(){
    console.log("Clicou no btnEvento3"), false
}) // colocando true. O evento é propagado

document.addEventListener("click", () => console.log("Clicou no documento"), false)

const container = document.getElementById("container")
container.addEventListener("click", () => console.log("clicou no container"), true)
