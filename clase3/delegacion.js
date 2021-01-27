/* Solucion 1

const btn1 = document.querySelector("button");
btn1.addEventListener("click", mostrarLenguaje);

function mostrarLenguaje(e){
    console.log(e.target, this); //Es una referencia al elemento que fue clickeado, tanto this como target
    alert("Elegiste el lenguaje" + lenguaje);
}


*/

//____________________________________________________________________________________________
/* Solucion 2


const botones = document.querySelectorAll("button");
botones.forEach(btn => {
    btn.addEventListener("click", mostrarLenguaje);
});

function mostrarLenguaje(e){
    console.log(e.target,this);
}

lenguaje = this.textContext;
alert("Elegiste el lenguaje" + lenguaje);

______________________________________________________
*///Solucion 3 y la mejor

const botonera = document.getElementById("botonera");
botonera.addEventListener("click", mostrarLenguaje);

function mostrarLenguaje(e){
    if(e.target.tagnName == "DIV"){
        return;
    }

// e.target: es el elemento que origino el evento
// this: es el elemento que esta asociado al listener

lenguaje =e.target.textContent
    alert("Elegiste el lenguaje "+ lenguaje);
}