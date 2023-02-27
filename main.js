let nombre = document.querySelector("#nombre")
let edad = document.querySelector("#edad")
let bNombre =document.querySelector("#bNombre")
let bSaludo = document.querySelector("#bSaludo")
let bLegal = document.querySelector("#bLegal")
let container = document.querySelector("#container")


bNombre.addEventListener ('click', agregarNombre)

function agregarNombre() {
    if(nombre != null ) {
        container.innerHTML = `<p>${nombre}</p>`
        console.log(nombre);

    }
}