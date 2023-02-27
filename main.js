let Nombre = document.querySelector("#Nombre")
let Edad = document.querySelector("#Edad")
let bNombre =document.querySelector("#nombre")
let bSaludo = document.querySelector("#saludo")
let bLegal = document.querySelector("#legal")
let hola = document.querySelector("#hola")

let nombreAgregar = ''
let edadAgregar = ''
bNombre.addEventListener ('click', agregarNombre)
bSaludo.addEventListener ('click', agregarSaludo)
bLegal.addEventListener ('click', agregarLegal)



Nombre.addEventListener ("input", (e) => {
    nombreAgregar = e.target.value

})
Edad.addEventListener ("input", (e) => {
    edadAgregar = e.target.value

})


function agregarNombre() {
    if(nombreAgregar !=  "" ) {
        hola.innerHTML = `<div class="justify-end">${nombreAgregar}</div>`

    }
}
function agregarSaludo() {
    if(edadAgregar !=  "" ) {
        hola.innerHTML = `<div class="justify-end">${edadAgregar}</div>`

    }
}
function agregarLegal() {
    if(nombreAgregar !=  "" ) {
        hola.innerHTML = `<div class="justify-end">${nombreAgregar}</div>`

    }
}