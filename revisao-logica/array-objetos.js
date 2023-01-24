const alunos = [
    {
        Nome: "Alexandre",
        Nota1: 8.0,
        Nota2: 7.5,
        Nota3: 5.0,
        Nota4: 3.0,
        ExibirMedia: function(){
            let media = (this.Nota1 + this.Nota2 + this.Nota3 + this.Nota4)/4;
            let status = media > 7?"Aprovado":"Reprovado";         
            return`A média do aluno ${this.Nome} é ${media}. O mesmo está ${status}`;    
        }
    },
    {
        Nome: "Luciana",
        Nota1: 8.0,
        Nota2: 6.0,
        Nota3: 3.0,
        Nota4: 3.0,        
        ExibirMedia: function(){
            let media = (this.Nota1 + this.Nota2 + this.Nota3 + this.Nota4)/4;
            let status = media > 7?"Aprovado":"Reprovado";         
            return`A média do aluno ${this.Nome} é ${media}. O mesmo está ${status}`;    
        }
    },
    {
        Nome: "Maria Eduarda",
        Nota1: 10.0,
        Nota2: 7.5,
        Nota3: 5.0,
        Nota4: 3.0,
        ExibirMedia: function(){
            let media = (this.Nota1 + this.Nota2 + this.Nota3 + this.Nota4)/4;
            let status = media > 7?"Aprovado":"Reprovado";         
            return`A média do aluno ${this.Nome} é ${media}. O mesmo está ${status}`;    
        }
    },
    {
        Nome: "Natan",
        Nota1: 8.0,
        Nota2: 7.5,
        Nota3: 10.0,
        Nota4: 3.0,
        ExibirMedia: function(){
            let media = (this.Nota1 + this.Nota2 + this.Nota3 + this.Nota4)/4;
            let status = media > 7?"Aprovado":"Reprovado";         
            return`A média do aluno ${this.Nome} é ${media}. O mesmo está ${status}`;    
        }
    },
    {
        Nome: "Gael",
        Nota1: 5.0,
        Nota2: 7.5,
        Nota3: 5.0,
        Nota4: 3.0,
        ExibirMedia: function(){
            let media = (this.Nota1 + this.Nota2 + this.Nota3 + this.Nota4)/4;
            let status = media > 7?"Aprovado":"Reprovado";         
            return`A média do aluno ${this.Nome} é ${media}. O mesmo está ${status}`;    
        }
    },{
        Nome: "Rafael",
        Nota1: 8.0,
        Nota2: 10.0,
        Nota3: 10.0,
        Nota4: 10.0,
        ExibirMedia: function(){
            let media = (this.Nota1 + this.Nota2 + this.Nota3 + this.Nota4)/4;
            let status = media > 7?"Aprovado":"Reprovado";         
            return`A média do aluno ${this.Nome} é ${media}. O mesmo está ${status}`;    
        }
    },
    {
        Nome: "Vitoria",
        Nota1: 5.0,
        Nota2: 5.5,
        Nota3: 5.0,
        Nota4: 3.0,
        ExibirMedia: function(){
            let media = (this.Nota1 + this.Nota2 + this.Nota3 + this.Nota4)/4;
            let status = media > 7?"Aprovado":"Reprovado";         
            return`A média do aluno ${this.Nome} é ${media}. O mesmo está ${status}`;    
        }
    },{
        Nome: "João",
        Nota1: 8.0,
        Nota2: 7.5,
        Nota3: 6.0,
        Nota4: 3.0,
        ExibirMedia: function(){
            let media = (this.Nota1 + this.Nota2 + this.Nota3 + this.Nota4)/4;
            let status = media > 7?"Aprovado":"Reprovado";         
            return`A média do aluno ${this.Nome} é ${media}. O mesmo está ${status}`;    
        }
    }
]

function ExibirAlunos(alunos)
{
    let objeto = typeof alunos;

    if(objeto =="object"){
        for (let i=0; i < alunos.length; i++){
            console.log(alunos[i].ExibirMedia());
        }
    }else{
        console.log("Parâmetro passado não é um array de objetos.")
    }  

}
ExibirAlunos(alunos);

console.log(ExibirAlunos.name)




    
