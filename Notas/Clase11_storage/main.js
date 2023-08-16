//Localstorage guarda en el navegador y permanece POR MÁS QUE SE CIERRE, SIEMPRE se guardan como STRINGS (CERRADO DE NAVEGADOR, APAGADO DE PC, SIEMPRE SE QUEDA GUARDADO), se puede usar para guardar CARRITOS, puntajes de juegos, favoritos, etc, cosas MENOS SENSIBLES
//se puede ver en inspeccionar/application/storage / local storage

//setItem se le pasa la clave y el valor a guardar
localStorage.setItem("NOMBRE", "ANDRES"); //clave: NOMBRE, valor: AADRES
localStorage.setItem("NUMERO", 5);

//getItem recupera el valor

let nombre = localStorage.getItem("NOMBRE");
let numero = localStorage.getItem("NUMERO");

let objeto = {
  nombre: "prueba nom",
  edad: 30
};

let arreglo =[1,2,3];

localStorage.setItem("OBJETO", objeto); //si intento guardar un objeto o un arreglo en el localstorage se daña..
localStorage.setItem("ARREGLO", arreglo);


//se puede RECORRER el local storage (no se usa ni for of ), se debe usar un for normal

for (let i = 0; i < localStorage.length; i++) { 
  let clave = localStorage.key(i); //obtenemos la clave con .key 
  console.log("clave", clave);
  console.log("item", localStorage.getItem(clave)); 
};

//BORRAR cosas de STORAGE - se hace con removeItem("nombreClave");
localStorage.removeItem("OBJETO");

//si se quiere BORRAR TODO LOCAL STORAGE se usa .clear()
localStorage.clear();

//SESSION STORAGE - guarda solamente en la SESION, se debe usar para cosas MÁS sensibles
//para guardar funciona igual al anterior, lo mismo aplica para el resto de propiedades

//setItem
sessionStorage.setItem("nombre", "andres");
sessionStorage.setItem("valor", "false");
sessionStorage.setItem("numero", "7");

//getItem
let nom = sessionStorage.getItem("nombre");
console.log(nom);
let val = sessionStorage.getItem("valor");
console.log(val);

//removeItem - eliminar un item
sessionStorage.removeItem("numero");

//clear
sessionStorage.clear();

//JSON
let objeto2 = {
  nombre: "prueba",
  edad: 30
};

//para poder guardarlo en json hay que poner JSON.stringify(nombre);
localStorage.setItem("objeto", JSON.stringify(objeto2));

let obj = localStorage.getItem("objeto"); //de esta manera obtengo el objeto PERO COMO STRING
console.log(obj);

//para obtenerlo como OBJETO hay que parsearlo con JSON.parse
let obj2 = localStorage.getItem("objeto"); //de esta manera obtengo el objeto PERO COMO STRING
console.log(JSON.parse(obj2)); //de esta manera lo dejo como objeto


const productos = [
  { id: 1, nombre: "camisa", precio: 160 },
  { id: 2, nombre: "camisa 2", precio: 200 },
  { id: 3, nombre: "camisa 3", precio: 260 },
  { id: 4, nombre: "camisa 4", precio: 360 }
];

localStorage.setItem("carrito", JSON.stringify(productos)); //POR LO GENERAL ESTA ES LA MANERA DE GUARDAR LOS CARRITOS, se guardan TODOS a la vez

//este de acá abajo guarda UNO por UNO, por lo general no se usa
const guardarStorage = (clave, valor) => {
    localStorage.setItem(clave, valor);
}
 
productos.forEach((item) => {
  guardarStorage(item.id, JSON.stringify(item));
})

//REVISAR **** NO FUNCIONA
let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");  //como usuario no tiene valor viene en null

//EJEMPLO DE USO PARA INICIOS DE SESION
if (usuarioStorage) {
  usuario = usuarioStorage;
  alert(`Bienvenido nuevamente ${usuario}`);
} else {
  usuario = prompt("ingrese el usuario");
  sessionStorage.setItem("usuario", usuario);
  alert(`Bienvenido ${usuario}`);
}


//FIN



//esto toma un carrito del local storage, si existe lo encuentra lo carga en el div, sino dice que no hay
let carrito = [];
let carritoStorage = localStorage.getItem("carrito");

if (carritoStorage) { //si encuentra carrito cargado del storage lo toma
  carrito2 = JSON.parse(carritoStorage); 
} else {
  let div = document.createElement("div");
  div.innerHTML = "No hay productos en el carrito";
  document.body.append(div); //agrego un div que dice que no hay productos en el body
}

carrito2.forEach(producto => {
  let div = document.createElement("div");
  div.innerHTML = `<h2>id: ${producto.id}</h2>
  <p>nombre: ${producto.nombre}</p>
  <b>$${producto.precio}</b>
  `
  document.body.append(div);
});

//ELIMINAR CARRITO, para eso me traigo el boton con id eliminar, le agrego el evento click y la funcion para borrar el carrito del  storage

let btnEliminar = document.getElementById("eliminar")

btnEliminar.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  location.reload(); //con esto recargo
  alert("carrito borrado");
});

//NOTA, si ponemos JSON.parse(datoBooleanoGuardadoComoString) convierte un dato que se guardó como string a booleano (REVISAR BIEN POR LAS DUDAS)
