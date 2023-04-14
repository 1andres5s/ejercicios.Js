var pelicula="Interestelar"

console.log("Variable película antes del bloque:", pelicula)


let musica="Rock"

console.log("Variable música antes del bloque:", musica)

//esto es un bloque
{
    var pelicula="Matilda"
    console.log("Variable película en el bloque:", pelicula)

    let musica="Salsa"
    console.log("Variable música en el bloque:", musica)
}

console.log("Variable película despues del bloque:", pelicula)
console.log("Variable música despues del bloque:", musica)


var nombre = "Pepito"
var apellido = "Perez"

let edad = "38"
let comida = "pizza"

{
    let edad = "40"
    console.log("la variable global se puede leer aqui", nombre)
    console.log("la variable global se puede leer aqui", edad)
}

console.log("la variable local NO se puede leer aqui", edad)