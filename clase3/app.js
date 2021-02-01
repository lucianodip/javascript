//const formulario = document.querySelector("form");
const formulario = document.forms.registro; //captura todoel formulario por suname

formulario.addEventListener("submit", validar);//submit es enviar los datosal servido


function validar(e){
    let inputEmail = e.target.elements.correo; //acceder al input de email
    let inputClave = e.target.elements.clave; //acceder al input de clave   
    let EREmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    let errores = [];

    //detectar errores
    if(!EREmail.test(inputEmail.value)){      // testea que el email este correcto con la expresion regular, pero lo niega,invierte
        errores.push("Formato de email incorrecto");
    }
    if(inputClave.value == ""){   
        errores.push("La clave no es correcta");
    }


    //    ____________________________________________________________________________
    
    if(errores.length){   //Hay errores?
      e.preventDefault(); //evita el envio antes de validar los datos
      document.getElementById("errores").innerHTML = "";
      errores.forEach( err =>{
          let li = document.createElement("li");
          li.textContent=err;
          document.getElementById("errores").appendChild(li);
      });
    }
}