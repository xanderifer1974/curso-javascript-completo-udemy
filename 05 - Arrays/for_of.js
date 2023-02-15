const arr = [1,2,3]
const obj ={
    nome: "Maria",
    idade: "28",
    email: "maria@server.com"
}

//Loop for in serve para interagir com o objeto
for (let prop in obj){
    console.log(`${prop}: ${obj[prop]}`)
  
}

//No caso do loop for of, serve para fazer interação de array. Ele retorna o valor dos elementos do array.

for(n of arr){
    console.log(n)
}

