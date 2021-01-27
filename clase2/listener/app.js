const boton = document.getElementById("btn1");
const boton2 = document.getElementById("btn2");
const boton3 = document.getElementById("btn3");

boton.addEventListener("click",agregarParrafo );
boton.addEventListener("click", cambiarColor);
boton2.addEventListener("click", quitarListener);
boton3.addEventListener("click", agregarListener);

function agregarParrafo(){
    const parrafo = document.createElement("p");
    parrafo.textContent= "hello";
    document.body.appendChild(parrafo);
}

function cambiarColor(){
    document.body.classList.toggle("tarde");
}

function quitarListener(){
    boton.removeEventListener("click", cambiarColor );
    boton.removeEventListener("click", agregarParrafo);
    boton.textContent=":(";
}

function agregarListener(){
    boton.addEventListener("click",agregarParrafo );
    boton.addEventListener("click", cambiarColor);
    boton.textContent="Agregar";
}