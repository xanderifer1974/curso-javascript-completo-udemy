console.log(document.body)
console.log(document.body.parentElement)
console.log(document.body.parentNode)
//parentElement e parentNode apontam para o mesmo elemento
console.log(document.body.parentElement === document.body.parentNode)

const html = document.body.parentElement

/*No caso abaixo, temos o elemento HTML. O primeiro console, veio como nulo pos html
não tem um pai que seja um elemento. Neste caso o parentElement mostra o pai que seja
elemento.
Mas já o segundo console, com parentNode, ele tem um pai que não é um elemento e sim
um document
*/
console.log(html.parentElement)
console.log(html.parentNode)

const h2 = document.querySelector("h2")

//nextSibling pega o próximo irmão, mas no caso desta função, pega inclusive texto
console.log(h2.nextSibling)
//Se quisermos pegar o próximo irmão, devemos utilizar nextElementSibling
const h2NextSibling = h2.nextElementSibling

h2NextSibling.style.background = "yellow"
//previousSibling pega o irmão anterior, mas no caso desta função, pega inclusive texto
console.log(h2.previousSibling)
//Se quisermos pegar o irmão anterior, devemos utilizar previousElementSibling
console.log(h2.previousElementSibling)

const link = document.querySelector("a")
const list = document.querySelector("ul ul")

console.log(link)
console.log(list.childNodes) // Retorna um nodeList com todos os nós, independente se são elementos ou não
console.log(list.children) // Retorna um HTMLCollection, trazendo apenas os nós que são elementos


console.log(link.parentElement.firstChild) //retorno o texto
console.log(link.parentElement.firstElementChild)

console.log(link.parentElement.lastChild) //retorno o texto
console.log(link.parentElement.lastElementChild)

console.log(link.parentElement)

//Verifica se o último elemento da UL, tem filhos
let temFilhos = list.lastElementChild.hasChildNodes()
console.log(`Tem filhos(hasChildNodes)? ${temFilhos}`)

//Verificando o tipo do nó
console.log(list.lastElementChild.childNodes[0].nodeType)


/*
Demais métodos a serem mostrados:
firstChild
firstElementChild
lastChild
lastElementChild
hasChildNodes
*/





