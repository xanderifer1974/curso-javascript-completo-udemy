//O mesmo desafio, mas desta vez utilizando uma abordagem para ES5, que não suporta as
//novas funcionalidades.

function sum(){
    const numbers = []
    // for(let i = 0; i <arguments.length; i++){
    //     numbers.push(arguments[i])
    // }
    // console.log(numbers)

    //Outra forma de fazer a soma

    //Na prática, estamos pegando emprestado o método for each do array,
    //para utilizar com arguments.
    Array.prototype.forEach.call(arguments, function(argument){

        numbers.push(argument)

    })

    return numbers.reduce((sum,atual) => sum + atual,0)

    
}


function avarege(){
    const soma = sum.apply(null, arguments)
   
    return soma / arguments.length
}

//Outras duas formas de chamar uma função

// sum.call(null, 1,2,3,4)
// sum.apply(null, [1,2,3,4])

let soma = sum(1,2,3)
console.log(soma)

let media =avarege(1,2,3)
console.log(media)