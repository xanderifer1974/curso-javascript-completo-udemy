//Função auto-invocaveis com parâmetros
(function(win,doc,texto){
   "use strict"
   let textoTratado = `${new Date().toLocaleString()} - ${texto}`
   let div = doc.getElementById("autoinvocaveis");
   win.alert(textoTratado);
   div.innerHTML = textoTratado
   

})(window,document,"Texto a ser escrito na DIV")