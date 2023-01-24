function soma(n1, n2)
{
    if( typeof n1 !== "number" || typeof n2 !== "number"){
        throw Error("Soma aceita apenas números")
    }

    return n1 + n2;
}

let sum = ""
try {

     sum = soma(3,e)
    
} catch (error) {
    console.log("Ocorreu um erro")
    console.log(error.message)
}

console.log(sum)


