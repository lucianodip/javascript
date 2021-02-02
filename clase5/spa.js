const enlace = document.querySelector("a");
enlace.addEventListener("click", manejarClickEnlace);

function manejarClickEnlace(e){
    e.preventDefault();
}

function peticionarContenido(){
    const ajax = new XMLHttpRequest();  // PETICION DE HTTP , COMUNICACION ENTRE MAQUINA Y MAQUINA, Creamos un objeto que nos permite hacer peticiones
    ajax.open("get", "./home.html"); //peticion con el open
    ajax.send(); //mandar peticion que tenemos del open
    ajax.addEventListener("load", e => {    //indica que llego una respuesta
        const section = document.getElementById("modulo");
        section.innerHTML = ajax.response
    });
}


//AJAX: Conjunto de tecnologias que se activan a partin un objeto.