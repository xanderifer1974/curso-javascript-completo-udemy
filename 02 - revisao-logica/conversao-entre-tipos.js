//Conversao entre tipos

let n1 = 10;
let n2 = "2";

//Aqui ocorre uma conversão implicita
console.log( n1 * n2, typeof n1, typeof n2 );

//Nas demais operações, ocorre uma conversão implicita, porém no caso da soma
//O sinal de mais tem a função de soma e concatenação, nesse caso o valor será 102
console.log( n1 + n2, typeof n1, typeof n2 );

/*Normalmente as informações que vem da interface gráfica do usuário vem como string, por isso é
importante fazer a conversão nos caso de cálculos para não gerar erros */


// Métodos de conversão
// parseFloat(), parseInt(), Number();


//Nesse caso agora a soma vai funcionar corretamente.
n2 = parseInt(n2);

console.log( n1 + n2, typeof n1, typeof n2 );


//Agora convertendo para Float

n3 = "10.9999";
n3 = parseFloat(n3);

console.log( n1 + n3, typeof n1, typeof n3 );

//Os metodos parse consegue converter, mesmo se após o número vier letras

n4 = "2akksjjsjjsjj";
n4 = parseInt(n4);
console.log( n1 + n4, typeof n1, typeof n4, `Valor do N4 = ${n4}` );

//Mas no caso da função number, ele reconhece como NAN (not a number)

n5 = "2akksjjsjjsjj";
n5 = Number(n5);
console.log( n1 + n5, typeof n1, typeof n4, `Valor do N4 = ${n5}` );


//Convertendo para String


n6 = n1.toString();

console.log( typeof n6,  `Valor do N6 = ${n6}` );

//Para converter o ToString para uma outra base que não é decimal, passamos entre parentes a base

n7 = n1.toString(2);

console.log( typeof n7,  `Valor do N7 na base binária = ${n7}` );







