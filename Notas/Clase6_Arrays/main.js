/*ARRAYS

por lo general se declaran con const en vez de let

estructura de un arreglo

const nombreArray = [elemento1, elemento2,..., elementoN]
el indice arranca en 0 (elemento1 esta en la posicion 0)


*/

const arregloVacio = [];
const numeros = [2, 8, 6, 10];
const nombres = ["1", "2","3","4","5","6","7"];
const valores = [true, false, false];
const variados = [true, false, 1, 2, "texto"];

//acceder a valores de un arreglo
//se hace con el indice dentro de [] ej:nombres[0]
console.log(nombres[0]);
console.log(nombres[1]);



//agregar elementos AL FINAL del arreglo .push

nombres.push("matias2");

//agregar elementos AL INICIO del arreglo .unshift()
nombres.unshift("matias0");

//saca el ultimo elemento del arreglo .pop
nombres.pop();

//saca el primer elemento del arreglo .shift()
nombres.shift();

//splice elemina ciertos elementos de la forma inicio, largo ejemplo .splice(1,3) se para en el la posicion 1, elimina 3
nombres.splice(0, 2);

nombres.splice(1, 0, "prueba"); //esto se para en la pos 1, no elimina ningun elemento y agrega un nombre, esto sirve para agregar un elemento en x posicion

//.join une los elementos del arreglo en un unico elemento en un string separado por un caracter separador que se le indique

console.log(nombres.join("-"));

//.concat une todos elementos de los arreglos en uno solo
const varios = nombres.concat(numeros);
console.log(varios);


//.slice copia de un fragmento de array, desde pos inicial y largo que se le de
const copia = nombres.slice(1, 4); 

//.indexOf busca la posiucion del elemento pasado por parametro
console.log(nombres.indexOf("3")); //si no encuentra un elemento devuelve -1


//.includes devuelve TRUE si encuentra el elemento que se le pasa
console.log(nombres.includes("2"));

const productos = ["camisa", "media", "zapato"];
let nombre = "perro";

if (productos.includes("nombre")) {
    console.log("- se encontro producto");
} else { console.log("no se encontro producto") };

//.reverse invierte el orden del array
console.log(productos.reverse());


//recorrida de arreglos
//.length devuelve el LARGO del array
for (let i = 0; i <  nombres.length; i++) { 
    console.log(nombres[i]); //esto imprime todos los items del arreglo
}

//ejemplo funcion para eliminar un elemento
const eliminar = (nombre) => { 
    let index = nombres.indexOf(nombre);
    if (index != -1) {  //si lo encuentra, o sea que no es -1 
        nombres.splice(index, 1); //elimina en la posicion en donde lo encontró y elimina 1
        console.log(nombres);
    }
}

//ejemplo recorrida  de un array de objetos

//arreglo de OBJETO
const productos2 = [
    { id: 1, nombre: "camisa", precio: 100 },   
    { id: 2, nombre: "camisa 2", precio: 200 },   
    { id: 3, nombre: "camisa 3", precio: 300 },   
    { id: 4, nombre: "camisa 4", precio: 400 },   
    { id: 5, nombre: "camisa 5", precio: 500 },   
    

]

//recorrida array de OBJETO (ej producto puede tener cualquier nombre)
for (const producto of productos2) { 
    console.log(producto);
}


//creo constructor de Producto que tiene nombre, precio y boolean de vendido
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }

  vender() {
    this.vendido = true;
  }
}

const productos3 = []; //creo un array de productos vacio

productos3.push(new Producto("camisa", 1234)); //le inserto un elemento al array productos3, lo hago llamando al constructor y pasandole los datos
productos3.push(new Producto("gorra", 134));
productos3.push(new Producto("pantalon", 1000));
productos3.push(new Producto("zaapto", 700));

let nombre2 = prompt("producto a consultar la información"); //pido un dato a buscar
let producto; //variable para luego cargar UN producto

for (let index = 0; index < productos3.length; index++) { //recorro el array
  if (productos3[index].nombre === nombre2) { //si encontro
    producto = productos3[index]; //tomo el producto que encontro y se lo paso a la variable que va a contener TODO el producto (objeto con precio, nombre y vendido)
  }
}

alert(`El nombre es: ${producto.nombre} precio: ${producto.precio}`);