
    
     //1)Crear una lista desordenada con 10 elementos dentro usando un bucle for. Tener en cuenta que 
     //solo se le puede hacer un único appendChild al ul creado, asi minimizamos el tiempo de modificaciones en el DOM.
     let ul = document.createElement("ul");
     let fragmento = document.createDocumentFragment();
     for(var i= 0; i < 10 ; i++ ){
        let li = document.createElement ("li");
        li.innerText = "item" + i
        fragmento.appendChild(li);
     }
     ul.appendChild(fragmento);


       
      
     //2)Hacer que el <article> con id "movil" solamente se vea si la página se carga a menos de 500px.
     if (window.outerWidth > 500) {
        document.querySelector("#movil").style.display = 'none'
    
    }
     

    //3)Realizar la misma operación que en el punto uno, pero ahora para el <ul> que ya se encuentra
    //en el <body>. Recordar que no se puede hacer múltiples appendChild a un nodo.
    let ule = document.getElementById("estatico");
    let lista = document.createDocumentFragment();
     for(var i= 0; i < 10 ; i++ ){
        let li = document.createElement ("li");
        li.innerText = "item" + i
        lista.appendChild(li);
     }
     ule.appendChild(lista);




     //4) Intercambiar las URLs de los links de la barra de navegación. El que dice Google! tiene que
     //redirigir a educacionit.com y viceversa.
     let links1=document.querySelector("a");
     let links2 = links1[1];
     links1[1]=links1[0];
     links1[0]=links2;



     //5)Cambiarle el color del fondo al <header> por alguna tonalidad de azul oscuro y al <h1> por
     //alguna tonalidad de blanco para que contraste.
     document.querySelector("header").style.backgroundColor= 'rgb(33, 97, 140)'
     ocument.querySelector("h1").style.backgroundColor = 'rgba(200,200,200,0.8)'