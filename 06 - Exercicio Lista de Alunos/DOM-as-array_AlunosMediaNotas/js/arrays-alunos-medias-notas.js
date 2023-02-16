(function(){

    //Método feito pelo chatGPT, pois o original não funcionou
    function getIndexByAlunoNota(value, prop) {
        const ths = document.querySelectorAll(`th[${prop}]`);
        for (let i = 0; i < ths.length; i++) {
          if (ths[i].getAttribute(prop) === value.toString()) {
            return i;            
          }
        }
        return -1; // caso o valor não seja encontrado
      }   
   
    const INDICES_NOTAS = {
        n1: getIndexByAlunoNota('n1','aluno-nota'),
        n2: getIndexByAlunoNota('n2','aluno-nota'),
        n3: getIndexByAlunoNota('n3','aluno-nota'),
        n4:getIndexByAlunoNota('n4','aluno-nota'),
        media:getIndexByAlunoNota('media','aluno-nota'),
    }

    console.log(INDICES_NOTAS)

    const trs = document.querySelectorAll("tbody tr")

    let x = 0
    let media = 0

    while(trs[x]){
        console.log(trs[x])

        const tds = trs[x].querySelectorAll("td")
        console.log(tds)
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