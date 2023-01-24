//Função callback é uma função passada por parâmetro
/*Fazer uma função CallBack que receba função para cálculos específicos
1 - Calcular INSS - 8% do salário
2 - Calcular Vale Transporte - 6% do salário
3 - Calcular alimentação - 5% do salário
*/

const CalcularInss = (salario) =>salario * 0.08;
   

const CalcularValeTransporte = (salario) => salario * 0.06;
 

const CalcularValeAlimentacao = (salario) => salario * 0.05;

function CalcularFolha(callback,salario){
    let valorCalculado;
    let nomeFuncao ="";
    let tipo =typeof callback;
    if(tipo ==="function"){
      nomeFuncao = callback.name;
        switch(nomeFuncao){
            case "CalcularInss":
                console.log("Calculando INSS...");                
                valorCalculado = callback(salario);
                break;
            case "CalcularValeTransporte":
                console.log("Calculando Vale transporte...");
                valorCalculado = callback(salario);
                break;
            case "CalcularValeAlimentacao":
                console.log("Calculando Vale alimentação...");
                valorCalculado = callback(salario);
                break;  
            default:
                 console.log("Função de cálculo não reconhecida");
                 valorCalculado = 0;
                 break; 
        }
        
        console.log(`Valor calculado = ${valorCalculado}`)
        
    }else{
        console.log("Parâmetro passado não é uma função")
    }
}

CalcularFolha(CalcularInss,10000);

 