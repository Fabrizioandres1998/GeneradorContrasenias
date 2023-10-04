
//CARACTERES PARA ARMAR CONTRASEÑA
let longitudInput = " "
const minusculas = "abcdefghijklmnopqrstuvwxyz"
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numeros = "0123456789"
const caracteresEspeciales = "!@#$%^&*()-_+=<>?/"
let caracteresMarcados = ""
//CARACTERES PARA ARMAR CONTRASEÑA
let contraseña = ""
//CONSTANTES DE LAS CHECKBOX TRAIDAS CON ID A JS
const minusculasCheckbox = document.getElementById("minusculasCheckbox")
const mayusculasCheckbox = document.getElementById("mayusculasCheckbox")
const numerosCheckbox = document.getElementById("numerosCheckbox")
const caracteresEspecialesCheckbox = document.getElementById("caracteresEspecialesCheckbox")
//CONSTANTES DE LAS CHECKBOX TRAIDAS CON ID A JS

const generarBtn = document.getElementById("generarBtn")

//FUNCION QUE HACE QUE SE AGREGUE O SE QUITE EL STRING DEL CHECKBOX
function chequear() {
    if (minusculasCheckbox.checked) {
        caracteresMarcados += minusculas
    }
    if (mayusculasCheckbox.checked) {
        caracteresMarcados += mayusculas
    }
    if (numerosCheckbox.checked) {
        caracteresMarcados += numeros
    }
    if (caracteresEspecialesCheckbox.checked) {
        caracteresMarcados += caracteresEspeciales
    }
}
//FUNCION QUE HACE QUE SE AGREGUE O SE QUITE EL STRING DEL CHECKBOX

//EVENTOS
minusculasCheckbox.addEventListener("change", chequear)
mayusculasCheckbox.addEventListener("change", chequear)
numerosCheckbox.addEventListener("change", chequear)
caracteresEspecialesCheckbox.addEventListener("change", chequear)
generarBtn.addEventListener("click", function() {
    generarContraseña();
    alert(contraseña);
});
//EVENTOS

//FUNCION PARA ARMAR LA CONTRASEÑA
function generarContraseña() {
    contraseña = " "
    longitudInput = document.getElementById("longitudInput").value
    for (let i = 0; i < longitudInput; i++) {
        let indice = Math.floor(Math.random() * caracteresMarcados.length)
        let caracter = caracteresMarcados.charAt(indice)
        contraseña += caracter
    }
    return contraseña
}
//FUNCION PARA ARMAR LA CONTRASEÑA

generarBtn.onclick = generarContraseña()