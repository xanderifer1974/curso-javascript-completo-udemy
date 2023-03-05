const msg = document.getElementById("msg")

msg.addEventListener("keypress", keypress)
msg.addEventListener("keyup", keyup)
msg.addEventListener("keydown", keydown)

//O keypress só é disparado em caracteres alfanuméricos
function keypress(event) {
    console.log("keypress")
    console.log(this.value)
}

//O keyup é o único evento que consegue trazer o valor atualizado.
function keyup(event) {
    console.log("keyup")
    console.log(this.value)
}
function keydown(event) {
    console.log("keydown")
    console.log(this.value)
}
