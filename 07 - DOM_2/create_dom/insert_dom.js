//Códigos relacionados ao método insert do javascript

const containerInsert = document.querySelector(".container-insert")

/*Parâmetros possíveis: beforebegin, afterbegin,beforeend, afterend

beforebegin - Vai inserir antes da div container-insert


*/
containerInsert.insertAdjacentHTML("beforebegin","<b>Texto Inserido com beforebegin</b></br>")
containerInsert.insertAdjacentHTML("afterbegin","<b>Texto Inserido com afterbegin</b>")
containerInsert.insertAdjacentHTML("beforeend","<b>Texto Inserido com beforeend</b>")
containerInsert.insertAdjacentHTML("afterend","</br><b>Texto Inserido com afterend</b>")

//insertAjdacentText, do mesmo modo que os de cima. Porém estes inserem um texto

containerInsert.insertAdjacentText("afterend", "texto sem tag html, indserido com insertAdjacentText")

//insertAdjacentElement, parecido porém precisamos criar um nó antes

const em = document.createElement("em")
em.textContent = "texto com ênfase."
containerInsert.insertAdjacentElement("beforebegin", em)