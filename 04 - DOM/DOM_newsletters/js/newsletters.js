/*
Para este exercício, será necessário utilizar o escopo global, por isso que foi retirada
a função auto-invocável.

Neste caso específico, a função de envio somente funciona no escopo global.

*/

const textoEmail = document.getElementById("txtEmail")
const msgFeedback = document.getElementById("newsletterFeedback")



function cadastrarEmail()
{
   let email = textoEmail.value   
   msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso`
}



