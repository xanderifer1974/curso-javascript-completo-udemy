/*
Métodos para manipulação do DOM
*/

//1) Método createElement - Cria um elemento no DOM
const title = document.createElement("h1")

//2) Método createAtribute - Cria uma atributo
const atributo = document.createAttribute("id")
atributo.value = "titulo1"

//3) Método setAtributeNode - vincula um atributo no DOM

title.setAttributeNode(atributo)

//Podemos utilizar também desta forma abaixo:

title.setAttribute("style", "color:red;")

//4) Método createTextNode - Cria um nó de texto (conteúdo)

const texto = document.createTextNode("Manipulação do DOM")

// Podemos também utilizar o textContent

//5) Método appendChild - Adiciona um filho no elemento pai

title.appendChild(texto)

console.log(title)

//Desta forma ele vai inserir no final do documento
//document.body.appendChild(title)

document.querySelector(".container").appendChild(title)

// Os métodos append e preppend não funcionam no I.E 11
//append adciona no final como o appendChild, já o prepend posiciona antes do primeiro filho

//Append
//document.querySelector(".container").append(title)

//Prepend
//document.querySelector(".container").prepend(title,"novo texto")

//Os métodos append e prepend, aceitam parâmetros do tipo nó e texto

/*Método - insertBefore() - Este método espera receber dois parâmetros. Um novo filho e um nó
de referência.
*/
const title2 = document.createElement("h2")
title2.textContent = "Título Nr. 2"
document.querySelector(".container").insertBefore(title2, document.querySelector("ul"))

//Simulando o prepend para IE 11

const titulo3 = document.createElement("h3")
titulo3.textContent = "Simulando o prepend no IE 11"

const container = document.querySelector(".container")

container.insertBefore(titulo3, container.firstChild)

//Movendo a segunda UL, sendo que esta UL estará sendo clonada usando o método cloneNode
// Caso não faço o clone, o que acontece é que o elemento é movido no DOM
// Para clonar a Ul e os filhos, devemos passar um parâmetro true no método

let  sublevel = document.querySelector("ul ul")
sublevel = sublevel.cloneNode(true)
const h2 = document.querySelector("h2")

container.insertBefore(sublevel, h2.nextElementSibling)

//Métodos after e before

const segundoParagrafo = container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
segundoParagrafo.after("Texto inserido com after")
segundoParagrafo.before("Texto inserido com before")
console.log(container.firstElementChild)
console.log(segundoParagrafo)

//Podemos inserir nó também
const span = document.createElement("span").textContent = "Texto inserido em um nó"
console.log(segundoParagrafo.nextElementSibling)
segundoParagrafo.nextElementSibling.after(span)
segundoParagrafo.nextElementSibling.before(span)
