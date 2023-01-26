(function(){

const usuario = "Natan Spinelli Ferreira";

if(usuario){

    const topBarElement = document.createElement("div");
    topBarElement.className="top-bar"
    topBarElement.innerHTML = `<p>Bem-vindo(a), <b> ${usuario} </b> </p>`

    const elementoPai = document.querySelector(".hero")
    elementoPai.insertBefore(topBarElement,elementoPai.firstElementChild)   
    

}


})()