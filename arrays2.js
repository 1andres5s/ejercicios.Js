
/*Existen metodos y propiedades que hacen que trabajar con arreglos sea más sencillo*/

//Crea una arreglo de 100 posiciones con el valor de false
console.log("-----------------Array(n).fill()----------------------")
const a= Array(100).fill(1) 
console.log(a)

const colores =["Rojo", "Azul", "Gris"]
console.log(colores)

//Con el método push() se agrega un elemento en la ultima posicion del arreglo.

console.log("-----------------push()----------------------")
colores.push("Verde")
console.log(colores)

//Con el método pop() se elimina el ultimo elemento del arreglo.
console.log("-----------------pop()----------------------")
colores.pop()
console.log(colores)

//Con el metodo slice() se crea una copia del arreglo

console.log("-----------------slice()----------------------")
const copiaColores =colores.slice();
console.log(copiaColores)

//La propiedad lenght obtiene el tamaño del arreglo.

console.log("-----------------lenght----------------------")
console.log(colores.length)


//ejercicio 1 Según lo anterior haga un código que por medio de un ciclo llene un arreglo con los números del 1 al 100 en imprimalo en pantalla

let numeros =[null]
console.log(Array.isArray(numeros))
for(let i = 1 ; i <= 100; i++){
    numeros.push(i)
    console.log(numeros[i])
}
//Haga un código que guarde los números pares del 1 al 100 en un arreglo e imprimalo en pantalla.

let pares = [null];
console.log(Array.isArray(pares))

for(let i = 0 ; i < 100; i++){
    if(i%2 ==0){
        pares.push(i)
    }
}
for (const p of pares){
    console.log(p)
}

console.log(`${pares}`)
console.log(pares)


//Desarrolle un código que reciba un arreglo con 3 números, los ordene e imprima en pantalla en orden

let numero = [7,1,9,5]
let aux

for (let i = 0 ; i < numero.length ; i++){
    for (let j = 0 ; j < numero.length ; j++){
        if(numero[i] < numero[j]){
            aux = numero[i]
            numero[i] = numero[j]
            numero[j] = aux
            console.log(numero)
        }
    }
}
console.log(numero)