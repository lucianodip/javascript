//El comportamiento de copiar olo ocurre con
//los primitivos

var a = 10;
var b = a; //copia el valor

a++;

console.log(a); //11 porque aumento 1.
console.log(b); //10

//comportamiento de objetos

var r = {nombre: "Juan", estudia: true, edad: 34};
var r = s; //copia la referecia que tiene el objeto, no los tres valores


r.edad ++;

console.log(r.edad); //35
console.log(s.edad); //35