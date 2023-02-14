const arr1 = new Array(3)
console.log(arr1)
console.log(arr1.length)

//Faz uma cópia do arr1
const arr2 = Array.from(arr1)
console.log(arr2)
console.log(arr2.length)

//Cria um novo array com uma posição, colocando o 3 na primeira posição
const arr3 = Array.of(3)
console.log(arr3)

//Selecionando os paragrafos

let paragrafos = document.querySelectorAll('p')
console.log(paragrafos)
// paragrafos.forEach(function(p,i){
//     p.textContent = `${++i} - ${p.textContent}`
// })

//Transforma objetos do dom em um array
//Útil quando tenho um objeto parecido com um array, e queremos transformar em
//array de verdade
paragrafos = Array.from(paragrafos)

paragrafos.map(function(p,i){
    p.textContent = `${++i} - ${p.textContent}`
})
