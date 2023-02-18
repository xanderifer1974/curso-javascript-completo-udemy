function sum() {
    // const numbers = Array.from(arguments)
    const numbers = [...arguments]
    return numbers.reduce(function (sum, atual) {
        return sum + atual
    }, 0)
}
function average() {
    return sum(...arguments) / arguments.length
}

function statusAproved(media){
    let situacao = media >= 7?"Aprovado":"Reprovado";
    return situacao
}