(function () {
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const formCadastro = document.querySelector(".formCadastro")
    const txtDescricao = document.getElementById("txtDescricao")

    //constantes para manipular o contador
    const contador = document.getElementById("contador")
    const resta = contador.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength



    //O evento está relacionado ao envio do formulário.
    formCadastro.addEventListener("submit", function (event) {
        if (!txtTitulo.value) {
            alert("Preencha todos os campos!")
            event.preventDefault()
            txtTitulo.focus()
        }
    })

    contador.style.display = "block"

    function checkLength() {
        let numerosDeLetrasDigitadas = this.value.length
        let caracteresRestantes = parseInt(maxima) - parseInt(numerosDeLetrasDigitadas)
        resta.textContent = caracteresRestantes
    }

    //Funciona para todas as entradas do teclado,inclusive quando colamos um texto
    txtDescricao.addEventListener("input", checkLength)



})()