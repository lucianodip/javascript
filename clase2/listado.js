//<li><a href="#argentina">Argentina</a></li>

const misPaises = ["Argentina", "Brasil", "Chile", "holanda"];
const ul = document.getElementById("paises");

/*
Agregar contenido al html
const ul = document.getElementById("paises");
ul.innerHTML = "<li><a href=\"#argentina\">Argentina</a></li>";
*/


/*
Agregar contenido de un array al html
const ul = document.getElementById("paises");
ul.innerHTML =`<li><a href="#${misPaises[0]}">#${misPaises[0]}</a></li> `;
*/


//Creacion de elementos al vuelo y uso de fragmentos
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
//los fragmento cuando son psasdo en un appendChild, 
//sus hijos son tranferidos al elemento y el fragmento 
//se vacia, es un transporte


