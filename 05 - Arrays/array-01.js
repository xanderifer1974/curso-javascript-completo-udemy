const arr = [1, 5, 10, "Olá", true]

/*
Every => A função every, verifica cada elemento de um array, através do parâmetro el
Retorna true apenas se todos os atendem a uma condição (el ==='number').
Caso um elemento não atenda a condição, o retorno será false
*/
let SohNumeros = arr.every(function(el){
       return typeof el ==="number"
})

/*
Some => A função some, verifica cada elemento de um array, através do parâmetro el
Retorna true caso pelo menos uma condição for atendida(el ==='number').
Neste caso, tendo um único número, o retorno será verdadeiro.
Caso um elemento não atenda a condição, o retorno será false
*/
let contemNumeros = arr.some(function(el){
    return typeof el ==="number" // Podemos colocar qualquer condição aqui
})

/*
Devemos utilizar every ou some, quando queremos fazer a verificação dos elementos
de um array.
*/

console.log(`O array arr, somente possui números: ${SohNumeros}`)
console.log(`O array arr, possui pelo menos um número: ${contemNumeros}`)

/*
Filter => A função filter deve ser utilizada, quando queremos filtrar um array.
No caso o filter pode receber uma function. E essa function pode receber
um elemento, o índice e o próprio array.
O filter não altera a array original. Ele retorna uma nova array.

*/
const arr2 = arr.filter(function(el, i, _arr){
      return typeof el == "number"
})

console.log(`Array arr original (sem filtrar): ${arr}`)
console.log(`Array arr filtrado: ${arr2}`)

/*
Foreach => O foreach, assim como o filter não altera o array original.
o método foreach sempre vai retornar undefined.
O método forEach, vai ser utilizado para fazer interações dentro de um array.
*/

 arr.forEach((el, i, _arr)=> console.log(`Elemento: ${el} - índice: ${i}`) )


 /*
 Map => O método map, retorna um novo array com os dados transformados.
  */

 const arr3 = arr2.map(function(el,i,_arr){
    return el * el
 })

 console.log(arr3)

