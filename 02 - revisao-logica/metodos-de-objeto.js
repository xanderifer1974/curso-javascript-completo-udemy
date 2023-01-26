/*
Criar um objeto que pegue o nome do aluno e as 4 notas, nesse objeto, criar
um método para calcular a média do aluno.

*/

const Aluno = {
    Nome: "Alexandre",
    Nota1: 8.0,
    Nota2: 7.5,
    Nota3: 5.0,
    Nota4: 3.0,
    Media: function(){
    console.log(`A média do aluno ${this.Nome} é ${(this.Nota1 + this.Nota2 + this.Nota3 + this.Nota4)/4} `);    
    }
}

Aluno.Media();
Aluno.Media();
