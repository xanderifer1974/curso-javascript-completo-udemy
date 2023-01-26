
//Função soma recebendo array como parâmetros
function somar(arr){
    let total = 0;
    for(let i=0; i < arr.length; i++){
        total += arr[i]
    }

    return total;
}

//Função de soma com arguments
function somarComArguments(){
    console.log(arguments);
    let total = 0;
    for(let i=0; i < arguments.length; i++){
        total += arguments[i]
    }

    return total;
}



console.log(somar([1,2,45,74,74]))
console.log(somarComArguments(1,2,3))