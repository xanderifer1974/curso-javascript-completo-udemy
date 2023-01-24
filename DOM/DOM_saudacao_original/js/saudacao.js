(function(){

const usuario = "Luciana Spinelli Ferreira";
const saudacaoUsuario = document.querySelector(".top-bar p");
const  bemVindo = saudacaoUsuario.textContent
if(usuario){

    saudacaoUsuario.innerHTML = `${bemVindo} <b>${usuario}</b>`

}else{
    // TopBar.parentElement.style.display ="none"
    saudacaoUsuario.remove()
}

})()