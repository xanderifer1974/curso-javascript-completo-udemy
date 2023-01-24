/*
Criar uma função para calcular média

Requisitos:

1) Pode receber um ou mais valores numéricos
2) Deve retornar um único número
3) Deve retornar erro se receber parâmetro não numérico
4) Deve retornar 0 se não receber nenhum parâmetro
*/

function CalcularMedia()
{
  let media;
  let soma;
  let divisor;
  let naoEhNumero = 0;  
  if(arguments.length ==0){
    media = 0;
  }else{
    soma = 0;
    divisor = arguments.length;
    for(let i=0; i < arguments.length; i++){
        if(isNaN(arguments[i])){
            naoEhNumero++
            break;
        }else{
            soma += arguments[i];          

        }
        
    }

    media = soma/divisor;
  }

  if(naoEhNumero !=0){
    console.log("Erro - Alguns parâmetros informados não são números")
  }else{
    console.log(`A média dos números informados é ${media}`)
  }
}

CalcularMedia()
