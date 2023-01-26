/*Colocando a chamada da função, antes da declaração. Neste caso a mesma funciona,
pois a declaração é içada para o início do arquivo. Isso só funciona com funções nomeadas*/

Test()

function Test(){
    console.log("Teste")
}

/*------------------------------------------------------------------------*/
/*Neste caso não irá funcionar. Mas se colocar após a declaração, irá funcionar
Este tipo de função abaixo não é nomeada*/
Test2()

const Teste2 = function(){
    console.log("teste2")
}

/*
Isso também funciona com variáreis, porém as mesmas devem ser criadas com o Var. Const e Let, não 
ocorrerá o içamento.
*/