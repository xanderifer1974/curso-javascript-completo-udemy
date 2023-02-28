(function(){
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")    
    const formCadastro = document.querySelector(".formCadastro")


    //O evento está relacionado ao envio do formulário.
    formCadastro.addEventListener("submit",function(event){       
        if(!txtTitulo.value){
            alert("Preencha todos os campos!")
            event.preventDefault() 
            txtTitulo.focus()
        }
    })

    

})()