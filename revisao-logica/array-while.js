//Criar um array com números randônicos não repetidos
const generaterRandomInterger = (max)=> parseInt(Math.random()* max);

let arr = [];

while(arr.length <=20)
{
    let randomNumber = generaterRandomInterger(30);

    //Se o index for menor que 0, o número não está no array
    if(arr.indexOf(randomNumber) < 0){

        //Coloca o número no array
        arr.push(randomNumber);
    }

}

//A função sort ordena um array
console.log(arr.sort(function (a,b){
    if(a > b) return 1;
    if(a < b)return -1;
    return 0
}));
