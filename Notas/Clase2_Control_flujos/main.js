/*
IF

if(condicion){
    codigo a ejecutar cuando la condición es verdadera
}
*/

let edad = 15;

if (edad >= 18) { 
    console.log("puede entrar");
}


/*
ELSE IF
if(condicion){
    codigo a ejecutar cuando la condicion es verdadera
}else{
    condicion a ejecutar cuando la condicion es falsa
}
*/

let edad2 = parseInt(prompt("Ingrese edad"));

if (edad2 >= 18) {
    alert("puede entrar");
} else { 
    alert("no puede entrar");
}
//NOTA, por defecto prompt guarda todo en string, por eso el parseInt para pasarlo a entero


let respuesta = prompt("Terminaste la tarea").toLowerCase; //.toLowerCase pasa a minuscula lo que se ingrese

if (respuesta === "si") {
    alert("puedes salir");
} else { 
    alert("no puedes salir");
}


/*
IF ELSE IF
if(condicion){
    codigo a ejecutar cuando la condicion es verdadera
}else if(condicion2){
    condicion a ejecutar cuando la condicion 1 es false y la condicion2 es verdadera
}else{
    codigo a ejecutar cuando ninguna condicion se cumple
}

*/
//es excluyente, si cumple primer condicion ya no entra  a la segunda
if (edad2 < 14) {
    alert("if-else-if NO puede entrar");
} else if (edad2 < 18) {
    alert("if-else-if Puede entrar con adulto");
} else { 
    alert("if-else-if Puede entrar"); 
}

/*OPERADORES LOGICOS
== ES IGUAL
=== estrictamente igual
!= distinto
!== estrictamente distinto
<, <=, >, >= menor, menor o igual, mayor, mayor o igual
&& operador and (y) (verdadero cuando ambas condiciones son verdaderas)
|| operador or (o) (verdadero cuando AL MENOS UNA de las condiciones es verdaderas)
! operador NOT (no -algo)
*/


let nombre = prompt("ingrese nombre");
let apellido = prompt("ingrese apellido");

if (nombre != "" && apellido != "") {
   
    alert("hola " + nombre + " " + apellido);

} else {
    alert("el nombre y apellido deben ser ingresados");
}

if (nombre == "ANA" || nombre == "ana") { 
    alert("Hola " + nombre);

} else {
    alert("no eres ana");
}


/*

NOTA 2, comparadores = 

= asignación
== evalua el valor que contiene
=== evalua  el valor y el tipo


3 == "3" es true ya que 3 = 3
3 === "3" es false ya que 3 numerico no es igual a 3 string

*/