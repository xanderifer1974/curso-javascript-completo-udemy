// function init(){
//     console.log("init menu")
// }

//Função auto-invocada
(function(){
    let isValid = true;
    console.log("menu",isValid)

    function init(){
        console.log("init do menu")
    }
    init()

})()

