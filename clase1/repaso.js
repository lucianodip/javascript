
//CAPTURAR------------------------------------------------------------------------------------------------
document.getElementById("caja"); // Captura el elemento por su ID
document.getElementsByClassName("caja"); // captura por Clase
document.getElementsByTagNamecaptura ("div"); //por nombre de etiqueta
document.getElementById("caja"); // Captura el elemento por su ID
document.getElementsByName("caja"); //captura por atributo nombre

//Anotacion: los metodos getElements, devuelve un ARRAY  con objetos HTMLElement

document.querySelector("h1"); //captura el primer factor que encuentra
document.querySelectorAll("p");// captura el array


//MANIPULAR------------------------------------------------------------------------------------------------
innerHTML = "Curso de <b>JS</b>"; //Cambia el contenido de la variable
innerText = "Curso de <b>JS</b>"; // no interpreta HTML, pero igual lo modifica
textContent = "Curso de JS"; // el oficial


//AGREGAR------------------------------------------------------------------------------------------------
classList.add("espaciado"); // Agrega clases al a la referencia
classList.remove ("espaciado"); //Remueve clases de la referencia
classList.toggle ("espaciado"); // si la tiene la quieta, si no la tiene la agrega


//PONER ESTILOS-------------------------------------------------------------------------------------------
style.border = "3px solid red";