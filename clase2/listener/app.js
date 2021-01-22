const boton = document.getElementById("btn1");
boton.addEventListener("click",agregarParrafo );

boton.addEventListener("click", cambiarColor);

function agregarParrafo(){
    const parrafo = document.createElement("p");
    parrafo.textContent= "hello";
    document.body.appendChild(parrafo);
}

function cambiarColor(){
    document.body.classList.toggle("tarde");
}