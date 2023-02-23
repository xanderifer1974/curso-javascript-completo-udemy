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
document.body.appendChild(title)


