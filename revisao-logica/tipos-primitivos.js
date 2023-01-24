/*
TIPOS PRIMITIVOS:

strings, numbers(int, float), boolean
Undefined, null, symbol(ES2015)

*/

//Dados primitivos STRING

let minhaVariavel = "Minha string";

let minhaVariavel2 ="Minha 'string' com aspas dupla";

let minhaVariavel3 = `Esta é a ${minhaVariavel}`;

let idade = 48;

let menssagem = `Eu tenho ${idade} anos.`

console.log(minhaVariavel2);

console.log(minhaVariavel3);

console.log(menssagem);

//Verificando o tipo de variável

let VerIdade = `A variável idade é do tipo: ${typeof idade}`;

let VerMensagem = `A variável mensagem é do tipo : ${typeof menssagem}`;

console.log(VerIdade);
console.log(VerMensagem);

const n1 = 10;
const n2 = 11.10;
let isValide = true;

let varIndefinido;
let varNulo = null;

console.log(`O tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`O tipo de n2 é ${typeof n2} e seu valor é ${n2}`);
console.log(`O tipo de isValide é ${typeof isValide} e seu valor é ${isValide}`);
console.log(`O tipo de varIndefinido é ${typeof varIndefinido} e seu valor é ${varIndefinido}`);

//No caso de valor nulo, o tipo é object (uma falha na implementação do JavaScript)
console.log(`O tipo de varNulo é ${typeof varNulo} e seu valor é ${varNulo}`);


//-----------------------------------------------