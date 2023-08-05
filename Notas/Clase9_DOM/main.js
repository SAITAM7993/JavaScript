/*
DOM modelo de objetos del documento

document es un objeto global y se puede acceder a todos los objetos del html con document.metodo
es el nexo entre js y html

se puede acceder a los nodos del html con los siguientes metodos de document

*/
//getElementById este por lo general es el que se usa mas
let variable = document.getElementById("aplicacion"); //aca obtengo el div
console.log(variable);
console.log(variable.innerHTML);//.innerHTML toma el html interno
console.log(variable.innerText);//.innerText toma el texto interno

let variable2 = document.getElementById("parrafo"); //aca obtengo el p
console.log(variable2);
console.log(variable2.innerHTML);//.innerHTML toma el html interno
console.log(variable2.innerText);//.innerText toma el texto interno

//getElementsByClassName esto obtiene los elementos con cierta clase 
let perritos = document.getElementsByClassName("perritos");
console.log(perritos[0].innerHTML);
console.log(perritos[1].innerHTML);
console.log(perritos[2].innerHTML);
//como devuelve una lista en este caso, si le ponemos un indice nos lo podemos traer

//tambien podemos hacer un for of
for (const perrito of perritos) { 
  console.log(perrito.innerHTML);  
}

//getElementsByTagName trae TODOS los elementos que tengan ese tag ej todos los DIVS
let divs = document.getElementsByTagName("div");
for (const div of divs) { 
  console.log("elements by tag-"+div.innerHTML);  
}

//MODIFICAR HTML
let saludo = document.getElementById("saludo");
saludo.innerHTML = "CAMBIO SALUDO";

let seccion = prompt("ingrese la seccion que desa");
if (seccion === "carrito") {
  saludo.innerHTML = "<h1>Bienvenido al carrito</h1>";//si se le pone tags por ej h1, le cambiamos la etiqueta
  saludo.className = "rojo"
  //saludo.setAttribute // con setAttribute le puedo setear atributos (clase, id etc)
} else if (seccion === "favoritos") {
  saludo.innerHTML = "Bienvenido a los favoritos";
  saludo.className = "verde" //con classname le agrego una clase 
} else { 
  saludo.innerHTML = "Bienvenido a la super página";
  saludo.className = "azul"
  
}


//creacion de nodos .createElement(etiqueta) tiene que ser una etiqueta literal

let parrafo = document.createElement("p"); //creacion de la etiqueta
parrafo.innerHTML = "HOLA"; //asignacion de contenido
//document.body.append(parrafo) //asignacion de un padre (donde se va a colocar) al document, al body, le agrego parrafo o
contenedor.append(parrafo); //o le puedo pasar el elemento a un div con un id por ejemplo

//eliminar etiqueta
let container = document.getElementById("contenedor");
//container.remove(); //obtengo el elemento contenedor y luego le hago un .remove para borrarlo

const productos = [
  { id: 1, nombre: "p1", precio: 100 },phjnkjuhinuhjjjjjjjjjjjj-------||-jnhhhhhhhhhhhujjjjjjjjhujnnnnnhnhjuhyyyyyyyhjhjhjhjhjhjhjhjhjhjhjhjhjhjhj  +
  { id: 2, nombre: "p2", precio: 200 },
  { id: 3, nombre: "p3", precio: 300 },
  { id: 4, nombre: "p4", precio: 400 },
]

productos.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    precio: ${item.precio}
  `;
  contenedor.append(div);
}
  
)
