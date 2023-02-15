function sum(){
const numbers = Array.from(arguments) //Criar uma array, com os parâmetros passados para a função.
// const numberspread = [...arguments] //Pode ser utilizado também o spread, para transformar arguments em um array
// console.log(numbers)
// console.log(numbers.reduce)
// console.log(`Utilizando o spread operator para transformar em array  [...arguments] :`)
// console.log(numberspread)

return numbers.reduce((sum,atual) => sum + atual,0)

}

function avarege(){
   return sum(...arguments) / arguments.length    
}

console.log(sum(1,2,3,4,5))
let media = avarege(10,4,4,7)
console.log(media)