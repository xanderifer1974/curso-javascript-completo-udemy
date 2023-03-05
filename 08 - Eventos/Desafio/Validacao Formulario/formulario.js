(function () {
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const formCadastro = document.querySelector(".formCadastro")
    const txtDescricao = document.getElementById("txtDescricao")
    const btn = document.getElementById("btn")
    const ckeckboxAceito = document.getElementById("chkAceito")

    //constantes para manipular o contador
    const contador = document.getElementById("contador")
    const resta = contador.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength
    mostrarNumero(maxima)



    //O evento está relacionado ao envio do formulário.
    formCadastro.addEventListener("submit", function (event) {
        if (!txtTitulo.value) {
            showErrorMessage("Preencha todos os campos!",function(){
                txtTitulo.focus()
            })
            event.preventDefault()
            
        }
    })

    contador.style.display = "block"

    function checkLength() {
        let numerosDeLetrasDigitadas = this.value.length
        let caracteresRestantes = parseInt(maxima) - parseInt(numerosDeLetrasDigitadas)       
        mostrarNumero(caracteresRestantes)
    }

    function mostrarNumero(n){
        resta.textContent = n
    }

    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]


    function showErrorMessage(msg, callBack){
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg

        if(typeof callBack ==="function"){
            callBack();
        }
    }

    feedbackMessageCloseBtn.addEventListener("click",function(){
        feedbackMessage.classList.remove("show")
    })

    btn.disabled = true

    ckeckboxAceito.addEventListener("change",function(){
        btn.disabled = !this.checked
    })

    
    //Funciona para todas as entradas do teclado,inclusive quando colamos um texto
    txtDescricao.addEventListener("input", checkLength)



})()