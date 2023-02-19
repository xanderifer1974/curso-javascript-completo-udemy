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
console.log(h2.nextElementSibling)
//previousSibling pega o irmão anterior, mas no caso desta função, pega inclusive texto
console.log(h2.previousSibling)
//Se quisermos pegar o irmão anterior, devemos utilizar previousElementSibling
console.log(h2.previousElementSibling)
