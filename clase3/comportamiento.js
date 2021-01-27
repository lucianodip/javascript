const caja = document.getElementById("caja");
const enlace = document.querySelector("a");

enlace.addEventListener("click", cambiarDiv);


function cambiarDiv(e){
      //evitar el comportamiento por defecto
    caja.src = enlace.href;
    e.preventDefault(); 
}
 
