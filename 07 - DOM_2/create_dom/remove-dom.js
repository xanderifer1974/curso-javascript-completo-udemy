//Método para remover elementos do DOM

const primeiraUL = document.querySelector("ul")

//No nosso exemplo, vamos remover do DOM a primeira ul, para isso utilizamos o método remove()

//primeiraUL.remove()

//Podemos também remover através do pai
primeiraUL.parentElement.removeChild(primeiraUL)

//O método abaixo substitui um contéudo por outro, devemos fazer esta substituição a partir do pai.

const segundoParagrafo = document.querySelectorAll("p")[4]
const parent = document.body
const newChild = document.querySelector("h2")
const oldChild = document.querySelector("h1")
const conteudoTransicao = oldChild.cloneNode(true)
parent.replaceChild(newChild,oldChild)

segundoParagrafo.insertAdjacentElement("beforebegin", conteudoTransicao)