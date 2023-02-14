let arr = [1,2,3]

/*
 O método reverse, inverte a ordem de um array. Este método altera a array original.
*/

console.log(arr.reverse())

/* O método reduce, faz um interação no array, retornando um único valor,
esta função pode receber mais dois parâmetros opcionais, o terceiro o índice e o quarto o 
array original*/
let j = 0
let soma = arr.reduce(function(acumulador, atual, i, _arr){
    console.log(`i: ${i}`)
    console.log(`j: ${j++}`)
    console.log(`Acumulador: ${acumulador} --- Atual: ${atual}`)   
    return acumulador + atual
}, 0) //O zero significa que o acumulador está começando por 0

console.log(soma)
console.log(arr)

//Exemplo de reduce com string

const nomes = ["Daniel","Maria","Joana","João"]
/*
Função feita com reduce, para contar os nomes por letras
O array contato vair receber o contador de nomes que começa
com uma determinada letra
*/

let nomesPorOrdem = nomes.reduce( function(nomes, nomeAtual){
 let primeiraLetra = nomeAtual[0]
 if(nomes[primeiraLetra]){
    nomes[primeiraLetra]++
 }else{
    nomes[primeiraLetra] = 1
 }

 return nomes

},{}) //Valor de retorno será um objeto

console.log(nomesPorOrdem)