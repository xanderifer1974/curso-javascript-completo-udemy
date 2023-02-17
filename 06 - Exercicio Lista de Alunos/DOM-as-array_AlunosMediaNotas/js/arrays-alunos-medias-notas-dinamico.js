(function(){

  /*
  Noova versão do código de cálculo de média, no qual
  foi criada uma função que cria o objeto com as propriedades
  de forma dinâmica. A versão original da Udemy não funcionou, então foi
  criada uma nova solução com a ajuda do chatGPT
  */
  const trHeader = document.querySelector("thead tr")  
  const thsAlunoNotas = trHeader.querySelectorAll("[aluno-nota]")
  const trs = document.querySelectorAll("tbody tr")
  const valoresPropriedades = []
  const alunos_notas = Array.from(thsAlunoNotas)
  alunos_notas.forEach(element => {
    valoresPropriedades.push(element.getAttribute("aluno-nota"))
   });

   function criarObjetoComPropriedades(arrayValores){
    let objeto = {}
    for(let i = 0; i< arrayValores.length; i++){
      objeto[arrayValores[i]] = i
    }
    return objeto
   }

  

  const INDICES_NOTAS = criarObjetoComPropriedades(valoresPropriedades) 
  
    let x = 0
    let media = 0  
  
    while(trs[x]){
        
       const tds = trs[x].querySelectorAll("td")
       media = average(
            parseFloat(tds[INDICES_NOTAS.n1].textContent),
            parseFloat(tds[INDICES_NOTAS.n2].textContent),
            parseFloat(tds[INDICES_NOTAS.n3].textContent),
            parseFloat(tds[INDICES_NOTAS.n4].textContent)
        )
        x++

        tds[INDICES_NOTAS.media].textContent = media.toFixed(2)
    }

})()