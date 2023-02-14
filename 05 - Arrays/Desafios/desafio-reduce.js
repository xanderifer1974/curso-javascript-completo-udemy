/*
Dado um array de números, retornar um novo array sem números repetidos.

Observação: Fazer utilizando o reduce()

*/

const numeros = [1,3,4,1,4,5,3,5,8,9]

const numerosUnicos = numeros.reduce(function(numerosUnicos, numeroAtual){
    if(numerosUnicos.indexOf(numeroAtual) < 0){ //Se indexof for -0, significa que não encontrou
        numerosUnicos.push(numeroAtual)
    }
    return numerosUnicos
},[])

console.log(numerosUnicos)