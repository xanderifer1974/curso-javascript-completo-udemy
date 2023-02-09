let arr = [4, 5, 10, 20, 35, 4, 5]

/*
indexOf(), lastIndexOf() - Esses dois métodos retornam o valor do índice do elemento encontrado.
Quando não encontrar alguma coisa, sempre é retonado o  -1.
*/
console.log(`indexOf => Índex do número 5 do array: ${arr.indexOf(5)}`)

console.log(`lastIndexOf => Índex do último número 5 do array: ${arr.lastIndexOf(5)}`)

//include() => Retorna um booleano, se encontrar ou não o elemento.

console.log(arr.includes(5))

/*find() => Retorna o primeiro valor encontrado, que satisfaça uma expressão dentro de function.
Se não encontrar nada, retorna valor undefined.
*/

console.log(arr.find(function(el){

    return el > 10

}))

/*
    findIndex -> retorna o índice, conforme o tamanho da função.
*/

console.log(arr.findIndex(function(el){
     return el > 100
}))
