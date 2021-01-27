/*
const refHtml = document.getElementById("box");
btnAccion.onclick= function(){

 refHtml.classList.toggle("oscuro");
} 
*/

//Resolucion del profesor


let btnAccion=document.getElementById("btnAccion");
btnAccion.addEventListener("click", function(){
    btnAccion.textContent = (document.body.classList.contains("oscuro"))? "Apagar la luz" : "Encender la luz";
    document.body.classList.toggle("oscuro");
}
)

 




/*

//Ejemplo condicional normal
var edad = 19;
var nombre;

if(edad>=18){
    nombre = "Juan";
}
else{
    nombre="Juancito"
}





//Ejemplo condicional simplificado
var edad = 19;
var nombre = (edad >= 18)? "Juan" : "Juancito"; //operador ternario 

*/
