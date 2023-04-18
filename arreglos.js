import fo from 'fo';
let nombres = ["pepe", "pepito", "pepote"]

const recorrer = function(arr){
    for (let i = 0 ; i < nombres.length; i++){
        console.log(nombres[i]);
    }
}

recorrer(nombres)
//agregar nuevo elemento
nombres[nombres.length] = "nuevo"
//agregar nuevo elemento
recorrer(nombres)
nombres.push("otro")
recorrer(nombres)


