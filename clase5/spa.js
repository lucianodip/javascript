const nav = document.querySelector("nav");
nav.addEventListener("click", manejarClickEnlace);

//refresh / ante el response del server 
window.addEventListener("popstate", e =>{
    let ruta = window.location.pathname
    peticionarContenido(ruta);
})


window.addEventListener("popstate", e =>{
    let ruta = window.location.pathname
    peticionarContenido(ruta);
})



function manejarClickEnlace(e){
 if(e.target.tagName == "A"){
    e.preventDefault();
    ruta = e.target.getAttribute("href");

    history.pushState(null, null , ruta);

    peticionarContenido(ruta);
 }
}

function peticionarContenido(ruta){
    const ajax = new XMLHttpRequest();  // PETICION DE HTTP , COMUNICACION ENTRE MAQUINA Y MAQUINA, Creamos un objeto que nos permite hacer peticiones
    ajax.open("get", routes[ruta].url); //peticion con el open
    ajax.send(); //mandar peticion que tenemos del open
    ajax.addEventListener("load", e => {    //indica que llego una respuesta
        const section = document.getElementById("Modulo");
        section.innerHTML = ajax.response;
        let titulo = document.querySelector("title");
        titulo.textContent=routes[ruta].titulo
    });
}


//AJAX: Conjunto de tecnologias que se activan a partin un objeto.