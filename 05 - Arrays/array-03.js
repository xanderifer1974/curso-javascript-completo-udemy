let arr1 = [1,2,3]
let arr2 = [5,6,3]

/*
toString() - Mostra a representação em string do array
*/

console.log(arr1.toString())

/*
O método join(), também retorna uma string. A diferença é o que o método join 
recebe um parâmetro opcional para separar os valores.
*/

console.log(arr1.join("-"))

/*
Método Concat - Tem por finalidade, juntar arrays. Podemos passar tanto arrays individuais,
como também podemos passar valores.
*/
let arr3 = arr1.concat(arr2);

console.log(arr3)

/*
Nas versões anteriores do javascript, se usava o método concat, para fazer cópia de array.
Mas hoje, existem outras formas de fazer isso.
*/

let arr4 = [].concat(arr3,5,41);

console.log(arr4);