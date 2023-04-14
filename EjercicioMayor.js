let num1 = 100; // Analizar si este es mayor
let num2 = 200; // o este
let num3 = 80; // o este

// Cuál es el número mayor e imprimirlos en orden

if(num1 > num2 && num1 > num3) {
    if(num2 > num3) {
        console.log(num1, num2, num3);
    }else {
        console.log(num1, num3, num2);
    }
    
}else if (num2 > num3 && num2 > num1) {
    if(num3 > num1) {
        console.log(num2, num1, num3);
    }else {
        console.log(num2, num3, num1);
    }
}else {
    if(num2 > num1) {
        console.log(num3, num2, num1);
    }else {
        console.log(num3, num1, num2);
    }
    
}