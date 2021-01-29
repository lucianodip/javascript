
//CAPTURAR------------------------------------------------------------------------------------------------
document.getElementById("caja"); // Captura el elemento por su ID
document.getElementsByClassName("caja"); // captura por Clase
document.getElementsByTagNamecaptura ("div"); //por nombre de etiqueta
document.getElementById("caja"); // Captura el elemento por su ID
document.getElementsByName("caja"); //captura por atributo nombre

//Anotacion: los metodos getElements, devuelve un ARRAY  con objetos HTMLElement

document.querySelector("h1"); //captura el primer factor que encuentra
document.querySelectorAll("p");// captura el array



//ESCUCHAR Y AGREGAR UN  EVENTO---------------------------------------------------------------------------
boton.addEventListener("click",agregarParrafo );
//escucha al boton y cuando este es clickeado, realiza una funcion. 

boton.removeEventListener("click", cambiarColor );
//escucha al boton y cuando este es clickeado, remueve una funcion previamente asignada.



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



//EVENTOS -------------------------------------------------------------------------------------------
onclick = function(){ //asigna una funcion cuando apreta el click
    // alert("Hola!");
}


//CREACION DE FRAGMENTOS ---------------------------------------------------------------------------------
const fragmento= document.createDocumentFragment();
//los fragmentos son contenedores/vehiculos de objetos que cuando se depositan en otras etiquetas padre con la 
//funcion appenChild estos desaparecen.



//CREACION DE ELEMENTOS ----------------------------------------------------------------------------------
let objLi = document.createElement("li"); //la variable objLi guarda el elemento li creado
let objA = document.createElement ("a"); // la variable objA guarda el elemento a creado



//CONVERTIR EN HIJOS---------------------------------------------------------------------------------------
fragmento.appendChild(objLi); // la funcion appedChild convierte en hijos a las etiquetas señaladas.



//COMPORTAMIENTO------------------------------------------------------------------------------------------
//evita la propagacion de los hijos al padre
function cambiarDiv(e){
caja.src = enlace.href;
e.preventDefault(); //evitar el comportamiento por defecto
}

function mostrarLenguaje(e){
    console.log(e.target, this); //Es una referencia al elemento que fue clickeado, tanto this como target
    alert("Elegiste el lenguaje" + lenguaje);
}
// e.target: es el elemento que origino el evento
// this: es el elemento que esta asociado al listener


//EJEMPLOS DE FUNCIONES-----------------------------------------------------------------------------------

//Funcion normal: Suma
function sumar (a,b){
  let total = a + b;
    return total;
}


//Funcion flecha: Resta
const restar = (a,b) => a - b; // simplicada, funcion flecha


//Este algoritmo lo primero que hace es guardar un boton por el id en una variable (btnAccion), luego utiliza 
//addEventListener para que cuando hagan click se active una funcion en la cual primeramente a la variable
//le cambia el contenido usando un textContent y utiliza un if simplificado para que si contiene "apagar", lo 
//cambie y viceversa, luego utiliza un toggle para cambia la clase a oscuro.
let btnAccion=document.getElementById("btnAccion");
btnAccion.addEventListener("click", function(){
    btnAccion.textContent = (document.body.classList.contains("oscuro"))? "Apagar la luz" : "Encender la luz";
    document.body.classList.toggle("oscuro");
}
)


//Este algoritmo primeramente crea un array "misPaises", luego captura a paises (un div), luego crea un fragmento
const misPaises = ["Argentina", "Brasil", "Chile", "holanda"];
const ul = document.getElementById("paises");
const fragmento= document.createDocumentFragment(); 
misPaises.forEach(function(pais){     //el foreach itera a misPaises
    let objLi = document.createElement("li"); //la variablw obLi guarda el elemento li creado
    let objA = document.createElement ("a"); // crea <a>
    objA.textContent = pais;     
    objA.href = '#'+pais; //le agregaEl hipervinculo
    objLi.appendChild(objA);    // 
    fragmento.appendChild(objLi);      //  los haces hijos 
});

ul.appendChild(fragmento);


//este algoritmo primeramente captura botonera, luego le agrega un addEventListener con la funcion determinada
//la funcion mostrarLenguaje(e) aplica un if en cual si el nombre es igual div retorna la variable. 
  
const botonera = document.getElementById("botonera");
botonera.addEventListener("click", mostrarLenguaje);

function mostrarLenguaje(e){
    if(e.target.tagnName == "DIV"){  //tagnName retorna el nombre 
        return;
    }