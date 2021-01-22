// CAPTURAR
const refDIV = document.getElementById("caja"); // Captura el elemento por su ID

//getElementById --> captura por Id
//getElementsByClassName --> captura por Clase
//getElementsByTagName --> captura por nombre de etiqueta
//getElementsByName --> captura por atributo nombre

//Anotacion: los metodos getElements, devuelve un ARRAY  con objetos HTMLElement 

const h1 = document.querySelector("h1"); //captura el primer factor que encuentra
const parrafosDirectos = document.querySelectorAll("p");// captura el array

 
//___________________________________________________________

// MANIPULAR 

//refDIV.innerHTML = "Curso de <b>JS</b>"; //cambia el contenido

//refDIV.innerText = "Curso de <b>JS</b>"; // no interpreta HTML, pero igual lo modifica

//refDIV.textContent = "Curso de JS"; // el oficial

//___________________________________________________________

// Estilos en linea
refDIV.style.border = "3px solid red";


//Clases css
refDIV.classList.add("redondeado");
refDIV.classList.add("espaciado"); // Agrega clases al a la referencia
refDIV.classList.remove ("espaciado"); //Remueve clases de la referencia
refDIV.classList.toggle ("espaciado"); // si la tiene la quieta, si no la tiene la agrega

//___________________________________________________________

// EVENTOS
//refDIV.onclick = function(){ //asigna una funcion cuando apreta el click
   // alert("Hola!");
//}


