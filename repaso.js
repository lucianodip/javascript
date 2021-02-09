
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


//MANIPULACION DE LA PROPAGACION DE EVENTOS----------------------------------------------------------------
var estatico = document.getElementById("estatico")

estatico.addEventListener("click", function(){
    var dinamico = document.createElement("buttom")//crea elemento boton cuando se clickea estatitico
    dinamico.innerHTML = "dinamico"  //el boton va a tener texto "dinamico"
    dinamico.id="dinamico"
    document.body.appendChild(dinamico)//el boton va a estar en body
})
//el boton no existe en el DOM (html) no se lo puede capturar directamente. pero le podemos asignar una funcion
// de otra forma... asignandole un evento al DOM directamente.

document.addEventListener("click", function(e){ //se le agrega evento al dom
    console.log(e.target.id)  
    if(e.target.id =="dinamico"){  //con la funcion e.target se manipula el elemento que se clickea
        console.log("Soy el boton dinamico")}
})



//CALLBACK ------------------------------------------------------------------------------------------------
//enviar una funcion por parametro 
var uno = () => {
    console.log("Soy la funcion uno")
}

function foo(a,CALLBACK){
    console.log(item)
}


//MANIPULACION DEL DOM --------------------------------------------------------------------------------------
var parrafo = document.getElementById("parrafo")

//Resize
window.addEventListener("resize", function(){//window se refiere al navegador, resize advierte que se cambia de tamaño
   // console.log("cambio de tamaño ")
    parrafo.innerText="El tamaño del navegador es de: "+ 
    window.outerHeight + "px de alto y " + window.outerWidth + "px de ancho"  //height= ancho / width = alto
})



//FORMULARIOS -------------------------------------------------------------------------------------------------
let form = document.getElementById("formulario");
let btn = document.getElementById("btn");

//MAL
btn.addEventListener("click", ()=>{
    console.log("click") //el formulario por defecto cuando presionamos input envia automaticamente y recarga la pag
                          //no te deja validar  
})

//BIEN
form.addEventListener("submit", (e)=>{
    e.preventDefault(); //esto anula el envio automatico y entonces se puede empezar a validar

})



//VALIDACION ESTANDAR DE HTML-----------------------------------------------------------------------------------------
let input = document.querySelector("input")
let btn = document.querySelector("button")

btn.addEventListener ("click", ()=>{
    console.log(input.checkValidity()) //checkValidity valida el requiered que esta en html devolviendo un boolean como resp.
})


//VALIDACION CUSTOMIZADA-----------------------------------------------------------------------------------------------
    let form = document.querySelector("form")
    let input = document.querySelector("input")

    form.addEventListener("submit", (e)=>{
        e.preventDefault()      //anulamos el envio automatico establecido por defecto
        let valor = input.value //con el value manipulamos los valores de los campos formularios
        let valorSinEspacios = valor.trim() //le sacamos los espacios
        let longitud = valorSinEspacios.length //calculamos cuantas cifras tiene el numero
        if(longitud > 3){

        }else{
            input.setCustomValidity("Este campo tiene que tener mas de 3 caracteres")//envia el mensaje de error que quieras
        }
    })

    //includes(""): Sirve para verificar si tal caracter esta incluido en el string. envia un boolean
    //indexOf(""): Sirve para verificar si tal caracter esta incluido en el string. envia la posicion en el string
    //encodeURIcomponent(""): convierte caracteres "maliciosos" en caracteres manejables/comunes


//EXPRESIONES REGULARES-------------------------------------------------------------------------------------------------
//secuencia de caracteres que conforman un patron de busqueda

let form = document.querySelector("form")
    let input = document.querySelector("input")

    form.addEventListener("submit", (e)=>{
        e.preventDefault()      //anulamos el envio automatico establecido por defecto
        let valor = input.value 
        let regexp = /^\w{5,10}$/ //1. todas las expresiones empiezan y termina con barras |2. el ^ y $ indica
                                  // que no hay espacios entre lo que se ingrese (especie de trim) |3. \w indica
                                  //que pueden ser caracteres alfanumericos |4. {5,10}tienen que ser entre 5 y 10 carateres

        if(refexp.test(valor)){ //.test testea la variable mediante la otra variable que tiene la espresion regular
            console.log("valido")
        }else{
            console.log("no valido")
        }                         
  })        

/* 
     \w : WORD : alfabetico y numerico
     \W : negacion de \W
     \d : digitos
     \D : negacion de \d
     \s : espacios , saltos de linea , etc
     \S : negacion \s   

 */

 /**
   
   {N} : cantidad de veces que se repita el caracter - ej: g{1} 
   {N,M} : minimo y maximo que se repita un carater
   (){} : cantidad de veces que se repitan un grupo de caracteres - ej: (abc){3}
   * : entre 0 o muchas repeticiones del caracter == {0,}
   + : entre 0 o muchas repeticiones del caracter == {1,}
   ^ : el comienzo de un strig - ej: ^a => arbol
   $ : el final de un string - ej: $a => avispa
   \b : el limite de una palabra

 */


//ASINCRICO VS SINCRONIA-------------------------------------------------------------------------------------------------
    setTimeout(()=>{    //permite programar lineas de codigo despues de determinado tiempo
        console.log("hola")
    },1000) //despues de 1000 milisegundos(un segundo) ejecuta la funcion

    console.log()
    console.log()
    console.log()
    console.log()

   
//AJAX--------------------------------------------------------------------------------------------------
//ajax permite la tranferencia de datos de una maquina a la otra de manera asincronica
//protocolo http, protocolo estandar de la wep para tranferencia de datos mediante www.

//contente-lenght : numero b                            //indispensables para el ajax porque tiene informacion
//content-type: image/jpg image/png text/html           //para tranferencia de datos



//TRANFERENCIA DE RECURSOS SINCRONICA--------------------------------------------------------------------
//XMLHttpRequest / XHR / AJAX / Async Javascript and XML
//Antes solo se podian tranferir archivos xml, ahora con la tecnologia de la api XHR (XMLHttpRequest) se puede tanferir de todo


let xhr = new XMLHttpRequest // de esta manera nos va a dar como resultqado un objeto de tipo XHR
XHR.readyState  //seria el cartero encargado de llevar la solicitud

/** ESTADOS
 *  0 - Objeto instancia/clonado
 *  1 - Objeto configurado ---sabe donde tiene que ir y donde tiene que llegar
 *  2 - Headers fueron enviados y recibido - ya sabes la respuesta que vas obtener
 *  3 - descargando activamente informacion 
 *  4 - Finalizado - no necesario
 */


let xhr = new XMLHttpRequest

xhr.open("get", "text.txt");//conlleva tres parametros para llevarse a cabo
                    //1 metodo:  get - post - put - patch - delete
                    //pedidos internos o externos: url o ubicacion de archivo
    
//Envio
xhr.send();













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