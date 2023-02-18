(function () {

  /*
  Nova versão que irá construir os dados da tabela de forma
  dinâmica a partir de um objeto JSON
  */
  const alunos = [
    { nome: "Daniel", Notas: [0, 3, 7.5, 3] },
    { nome: "Maria", Notas: [10, 9, 3, 9.5] },
    { nome: "João", Notas: [10, 4.5, 1, 3.5] },
    { nome: "Joana", Notas: [1, 3, 9, 1.5] },
    { nome: "José", Notas: [10, 4.5, 7, 3] },
    { nome: "Arnaldo", Notas: [10, 4.5, 7, 3] },
    { nome: "Lucas", Notas: [4.5, 9, 8, 3] },
    { nome: "Luana", Notas: [3, 7, 9, 3] },
    { nome: "Beatriz", Notas: [10, 4, 7, 9] },
    { nome: "Sergio", Notas: [4.5, 9.5, 10, 2] }
  ];

  alunos.forEach(aluno => {
    aluno.media = average(...aluno.Notas).toFixed(2)
    // aluno.media = average.apply(null,aluno.media).toFixed(2) - Solução para navegadores
    //antigos
  })

  const html = alunos.map(aluno => `
   <tr>
      <td>${aluno.nome}</td>
      ${aluno.Notas.map(n => `<td>${n}</td>`).join("")}
      <td>${(aluno.media)}</td>
    </tr>`).join("")

  document.querySelector("tbody").innerHTML = html


})()