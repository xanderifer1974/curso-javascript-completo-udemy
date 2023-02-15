//Spread operator - Quebra um array, passando somente os valores

const arr = [1,2,3]

let arr2 = [4,5,6]

function sum(){
    console.log(arguments)
    console.log(arguments.length)
}

sum(...arr)

arr.push(...arr2)

console.log(arr)