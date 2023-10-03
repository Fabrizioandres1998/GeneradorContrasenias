const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let contraseña = " "

function generarContraseña(largo) {
    for (let i = 0; i<largo; i++) {
        let indice = Math.floor(Math.random()*caracteres.length)
        let caracterDelIndice = caracteres.charAt(indice)
        contraseña += caracterDelIndice
    }
    return contraseña
}
console.log(generarContraseña(20))