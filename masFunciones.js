let a = 1,
  b = 2;

const relacion = function (a, b) {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
};

console.log(relacion(a, b));

//funcion anonima
console.log(
  (function (a) {
    if (a % 2 == 0 && a >0) return ("es par");
    else if(a>0) return "no es par";
    else return "numero invalido";
  })(2))
;
