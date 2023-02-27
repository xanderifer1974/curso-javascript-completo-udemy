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
