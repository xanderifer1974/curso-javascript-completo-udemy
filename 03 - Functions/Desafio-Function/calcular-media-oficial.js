/*
Criar uma função para calcular média

Requisitos:

1) Pode receber um ou mais valores numéricos
2) Deve retornar um único número
3) Deve retornar erro se receber parâmetro não numérico
4) Deve retornar 0 se não receber nenhum parâmetro
*/

(function(){
    function calcularMedia()
    {
        let total = 0;
        let qtde = arguments.length;
        for (let i=0;i<qtde;i++)
        {
            if(typeof arguments[i] !=="number"){
                throw Error("Somente números!")
            }
            total += arguments[i];
        }

        return (total / qtde) || 0;


    }

    let media = calcularMedia(1,5.4)
    console.log(media);

})()