let boton = document.getElementById("boton");


//primera forma de asignar un evento (la que mpas se utiliza).. esto es una declaración no una ejecución
/*
boton.addEventListener("click", () => {
  console.log("click");
});
 //al boton agregarle un escuchador de eventos, se le pasa dos parms, el nombre del evento (NO ES CUALQUIER EVENTO, HAY EVENTOS PREDEFINIDOS ), el segundo parametro es una funcion. es más dinámica porque se le podría pasar el evento por una variable
*/

 //segunda forma
 /*
boton.onclick = () => console.log("Click"); //se usa el .onclick, es la más corta pero no es la que más se utiliza
*/
/*
const saludar = (nombre) => {
  console.log("hola " + nombre);
};

//boton.addEventListener("click", saludar); //no puedo pasarle parametros por acá porque se rompe, la solución es colocarle una arrow function

//si la funcion tiene parametros debo crear una arrow function para pasar una definicion no una ejecucion
boton.addEventListener("click", () => saludar("pepe")); 

*/

//EVENTOS DEL MOUSE

boton.addEventListener("mouseown", () => console.log("mousedown")); //MOUSE DOWN, solo al presionar (sin necesidar de levantarlo)

boton.addEventListener("mouseown", () => console.log("mouseup")); //MOUSE UP, ejecuta al levantar el mouse luego de presionar (es más veloz que el click)

boton.addEventListener("mouseown", () => console.log("mouseover")); //MOUSEOVER al pasar el mouse por arriba

boton.addEventListener("mouseown", () => console.log("mouseout"));  //MOUSEOUT al pasar por arriba y SALIR,

boton.addEventListener("mouseown", () => console.log("mousemove"));  //MOUSEMOVE al mover el mouse POR ARRIBA

boton.addEventListener("mouseown", () => console.log("click")); //CLICK al dar click

boton.addEventListener("mouseown", () => console.log("dbclick")); //DBCLICK al dar doble click


//EVENTOS DEL TECLADO
let nombre = document.getElementById("nombre");
nombre.addEventListener("keydown", () => console.log("keydown")); //al presionar una tecla
nombre.addEventListener("keyup", () => console.log("keyup")); //al levantar una tecla

//reconocer la tecla que se ingresa
//cada vez que se tira un evento se crea una variable automática que contiene cosas.. por ej qué tecla se presiono
//nombre.addEventListener("keyup", (e) => console.log(e.key));

//ejemplo usar el e key
nombre.addEventListener("keyup", (e) =>{
  if(e.key === "s") {
    boton.innerText = "S"; //le cambio el texto de un boton segun la tecla presionada
} else if(e.key === "a") {
   boton.innerText = "A";
}

}); 

//CHANGE se ejecuta cuando cambia, desenfoca de un elemento 
nombre.addEventListener("change", () => console.log("change"));

//INPUT - RECONOCER TODO LO QUE TIENE EL INPUT
nombre.addEventListener("input", () => console.log("input"));

//por ejemplo, se peude usar para validaciones en el texto ingresado. ej
nombre.addEventListener("input", () =>{
  if (!nombre.value.includes("@")) {
   console.log("incorrecto");
  }else {
   console.log("correcto"); //valido que tnega @ ej validacion de mail
  }
});

let formulario = document.getElementById("formulario");

//por defecto el evento submit hace que se recarge la pagina, por eso ponemos e.preventDefault para que no recargue la pagina
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hola a todos");

  //OBTENER INPUTS DE FORMULARIOS
  let inputs = e.target.children; //en este lugar tenemos TODOS los inputs del formulario
  console.log(inputs[0].value); //como es una coleccion la puedo obtener con [posicion].value
  console.log(inputs[1].value);
  
  if (!inputs.)
});

