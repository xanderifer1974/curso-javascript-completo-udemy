/*
Essa função recebe um array numeros contendo os números que você deseja calcular a média.
Se o array estiver vazio, a função retorna 0.
Caso contrário, a função usa o método reduce() para somar todos os elementos do array
 e depois divide a soma pelo tamanho do array para obter a média.
 Por fim, a função retorna a média calculada.
*/

function calcularMedia(numeros) {
    if (numeros.length === 0) {
      return 0;
    }
    const soma = numeros.reduce((total, numero) => total + numero);
    const media = soma / numeros.length;
    return media;
  }

  let arr = [10,10,10,100]

  let media = calcularMedia(arr);

  console.log(media);