//ES5
var aux = 100;
var aux = "Hola"; // vuelve a definir la misma variable sin problemas
console.log(aux);

//ES6
let cantidad = 10;
// let cantidad = "Otro"; // ERROR
console.log(cantidad); 

const PI = 3.1416; // CONS no se puede modificar la variable, son estaticas.

const tituloH1 = document.getElementById ("titular"); //captura
tituloH1.innerHTML = "Javascript";
tituloH1.style.color = "red";