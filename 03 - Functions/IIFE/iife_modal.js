// let isValid = true;
// function init(){
//     console.log("init modal")
// }

//Função auto-invocada
(function(){
    let isValid = false;
    console.log("menu",isValid)

    function init(){
        console.log("init do modal")
    }
    init()

})()