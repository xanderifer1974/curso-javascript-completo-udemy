//Passagem por valor
let x = 10
 function mudaX(x){
    x++
    console.log('x interno', x)
 }

 mudaX(x)
 console.log("x externo", x)

 //Passagem por referência
let n = [10]

function MudaN(n,value){
    n.push(value)
    console.log("n interno", n)
}

MudaN(n,13)
console.log('n externo', n)
