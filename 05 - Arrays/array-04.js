let arr = [1, 3, 5, 7, 9]

//Método Push() - Serve para acrescentar valores no fim de um array.

arr.push(11,12);
console.log(arr)

//Método pop(), retira o último elemento de um array, alterando a array original.

let ultimoItem = arr.pop();
console.log(`Ultimo item retirado do array: ${ultimoItem}`)
console.log(`Array sem o último elemento: ${arr}`)

console.log(`Ultimo item, sem alterar o array: ${arr[arr.length - 1]}`)

//Método shift(), retira o primeiro elemento de um array
let primeiroItem = arr.shift();

console.log(`Primeiro item retirado do array: ${primeiroItem}`)
console.log(`Array sem o primeiro elemento: ${arr}`)

// Método unshift(), inclui um elemento no início do array
let teste = arr.unshift(4,5,6); //Retorna o número de elemento
console.log(teste) 
console.log(arr) // Retorna o array modificado


//Método slice, serve para recortar um pedaço do array.

let arr2 = arr.slice(2,4) //Faz um recorte a partir do elemento de índice 2  até o 4.

console.log(arr2)
console.log(arr)

//Método splice - Serve tanto para remover elemento, como acrescentar e em qualquer posição.

let arr3 = arr.splice(2,4,"Olá mundo") //Remove 4 elementos, a partir do índice 2, podemos colocar elemente após
console.log(arr3)
console.log(`O retorno, são os elementos removidos ${arr3}`)
console.log(arr)