//Criar uma função utilizando arguments que inverte um nome

function inverteNome()
{ 
 let arr=""
 let invert =""
 for (let i=0; i< arguments.length;i++){
    arr += arguments[i].split(",")

 }
 
 for (let i=arr.length - 1; i>=0; i--){
    invert += arr[i]
 }

 console.log(invert)
}

inverteNome("NATAN SPINELLI FERREIRA")
inverteNome("Hoje eu trabalhei bastante, e consegui terminar meu trabalho.")
