/*

______________________________________________________
//Definicion
function mostrar(nombre){
  console.log("hola "+nombre)  
}


______________________________________________________
//llamado
mostrar("Luciano");


______________________________________________________
//Arguments en consola guarda todos los parametros que se le manda no 
//importando si son mas o menos de los determinados por la funcion 

function sumar (a,b){
console.log(a,b);
console.log(arguments);
let total = a+b;
return total;
}

//arguments guarda en una especie de array

______________________________________________________

//Sumar una lista de numero con un array arguments

function sumar(){
    let total =0;
   // for(let i=0;i<arguments.length; i++){
     //   total +=arguments[i];
    //}
    let argumentos=Array.from(arguments); //convierte en un verdadero array para poder usar foreach
    argumentos.forEach(function(valor){
        total +=valor;
    })
    return total;
}

let res = sumar (10,20,100,2);
console.log(res);

_______________________________________________________

 
//ARROW
    const sumarx = (a,b) => {
        console.log (a,b);
        return a + b;
    }

__________________________________________________________

    //ES5
    const restar = function(a,b) {
        return a-b;
    };

    //ES6
    const restarX = (a,b) => a - b; // simplicada, funcion flecha
____________________________________________________________
    

     //ES5
     const duplicar = function(m) {
        return m * 2;
    };

    //ES6
    const duplicarX = m => m * 2; // simplicada, funcion flecha
_______________________________________________________________


    //ES5
      var saludar= function() {
        console.log("hola");
    };

    //ES6
    const saludarlX = () => console.log("hola"); // simplicada, funcion flecha
   
_______________________________________________________________
*/

