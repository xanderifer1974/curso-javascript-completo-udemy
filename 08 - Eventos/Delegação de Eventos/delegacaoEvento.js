/*
Delegação de Eventos - Colocando com exemplo uma lista, e em cada <li>, temos um evento. Se usarmos
esta abordagem, poderemos sobrecarregar a memória do computador. Com a delegação de eventos, o que
podemos fazer é associar um evento ao elemento pai( no caso UL), sendo que pela delegação, é identificada
a ul que foi clicada.
*/

const btns = document.querySelectorAll(".container-delegacao button");

//Dá para fazer com esta solução, porém se tivermos muitos botões, isso irá impactar na performance
//da aplicação
[...btns].forEach(btn => {
    btn.addEventListener("click", function (event) {
        event.stopPropagation()
        console.log(event.target.nodeName)// O elemento que disparou o evento.
    })

});

//Aplicando a delegação de eventos
const ulDelegacao = document.querySelector(".aplicando-delegacao")
const linhas = document.querySelectorAll(".aplicando-delegacao li");

ulDelegacao.addEventListener("click", function (event) {
    event.stopPropagation()
    if (event.target.nodeName == "LI") {

        console.log(event.target.innerText)   }


})




