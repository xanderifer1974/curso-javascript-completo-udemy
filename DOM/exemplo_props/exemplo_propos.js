const txtNome = document.querySelector("#txtNome")
const txtEmail = document.querySelector("#txtEmail")
const lblContrato = document.querySelector("label[for='contrato']")

txtNome.value = "Alexandre"
txtNome.disabled = true
txtEmail.readOnly = true

console.log(lblContrato)
console.log(lblContrato.htmlFor)
console.log(txtEmail.maxLength)
console.log(txtEmail.className)
