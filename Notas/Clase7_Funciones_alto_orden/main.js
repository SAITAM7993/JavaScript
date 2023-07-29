/*
FUNCIONES ALTO ORDEN
son funciones que retornan otras funciones o que reciben funciones por parametros
*/

function mayorQue(n) { 
  return (m) => m > n; //retorna una funcion
}

let mayorQueCinco = mayorQue(5); //(m) => m > 5; retorna esto, significa que guardo en una variable en una funcion
console.log(mayorQueCinco(1));
//guarda una funcion en una variable, luego esa funcion le paso un parametro y se puede volver a usar

let mayorQueDiez= mayorQue(10); // (m) => m >10;


//esto por ej crea funciones que retornan una operación, por ej le pasamos "sumar" y crea una funcion suma

function asignarOperacion(operacion) { 
  if (operacion === "sumar") { 
    return (a, b) => a + b;
  }

  if (operacion === "restar") { 
    return (a, b) => a - b;

  }
  if (operacion === "multiplicar") { 
    return (a, b) => a * b;
  }

  if (operacion === "dividir") { 
    return (a, b) => a / b;
  }

}

//llamo a la función que retorna otras funciones, asignarOperacion
let suma = asignarOperacion("sumar");//(a,b) => a + b;  //crea la funcion suma
let resta = asignarOperacion("restar");//(a,b) => a - b;  //crea la funcion suma
let multiplicacion = asignarOperacion("multiplicar");//(a,b) => a * b;  //crea la funcion suma
let division = asignarOperacion("dividir");//(a,b) => a / b;  //crea la funcion suma

//luego las puedo usar con los parm que tiene la funcion creada

console.log(suma(1, 1)); //1+1
console.log(resta(5, 2));//5-2
console.log(multiplicacion(6, 2));//6*2
console.log(division(7, 2));//7/2

//ejemplo funcion que recibe una funcion

function iterador(arreglo, funcion) { 
  for (const elemento of arreglo) {  //elemento se puede llamar como quieras
    funcion(elemento);
  }
}

iterador([2, 4, 65, 7], console.log);  //le paso el arreglo y una funcion, esto lo que hace es un console log de cada elemento

//FUNCIONES DE ALTO ORDEN DE LOS ARREGLOS

let productos = [
  { id: 1, nombre: "camisa", precio: 100 },
  { id: 2, nombre: "camisa 2", precio: 200 },
  { id: 3, nombre: "camisa 3", precio: 300 }    
]

//RECORRER ARREGLO
//forEach recorre el arreglo
productos.forEach((item) => {
  console.log(item.nombre);
});


//BUSCAR ELEMENTO
//find encuentra el primer elemento que cumpla la condicion
//const producto = productos.find((item) => item.nombre === "camisa 2");
//console.log(producto);

//utilidad..EJEMPLO DE UN BUSCADOR

let nombre = prompt("ingrese el nombre del producto");
const producto = productos.find(item => item.nombre === nombre);

if (producto) {
  let mensaje = `
  id: ${producto.id}
  nombre: ${producto.nombre}
  precio: ${producto.precio}
  `;

  alert(mensaje);
} else { 
  alert("producto no disponible");
}


//OBTENER ELEMENTOS POR UN FILTRO
//filter filtra los elementos que cumplen con la condicion dada, ej precio y nombre que contenga una letra
let filtrados = productos.filter((item) => item.precio > 550 && item.nombre.includes("a"));
console.log(filtrados);

//VER SI EXISTE AL MENOS UN ELEMENTO QUE CUMPLA ALGO
//some verifica si existe al menos un elemento que cumple la condicion (true o false)
console.log(productos.some((item) => item.nombre === "zapato"));


//map TRANSFORMA los elementos del arreglo para mostrarlo (no modifica el original, los guarda en un arreglo u objeto)
let nombres = productos.map((item) => item.nombre); //arreglo con los nombres devueltos
let precios = productos.map((item) => item.precio);

console.log(nombres);
console.log(precios);

//mas de un dato por ej devuelve un objeto con nombre y precio
let datos = productos.map(item => { 
  return {
    nombre: item.nombre,
    precio: item.precio
  };   
}
);

console.log(datos);

//reduce reduce un arreglo a un único elemento
const numeros = [3, 5, 6, 8, 8];

const total = numeros.reduce((acumulador, item) => acumulador + item, 0); //recibe dos parm, un arrow function (acumulador e item (en acumulador guarda el total que se va sumando))  y un nro ( el valor inicial del acumulador)
/*
acumulador = 0+3 =  3
acumulador = 3+5 = 8
acumulador = 8+6 = 14
acumulador = 14+8 = 22
acumulador = 22 + 8 = 30

*/
console.log(total);

//ejemplo utilidad, sumar carritos de compra
let carrito = [
  { id: 1, nombre: "camisa", precio: 100 },
  { id: 2, nombre: "camisa 2", precio: 200 },
  { id: 3, nombre: "camisa 3", precio: 300 }    
]
const totalCarrito = carrito.reduce((acum, item) => acum + item.precio, 0); //suma el precio de todos los items del carrito
console.log(totalCarrito);


//SORT ordena el arreglo 
const numerosEj = [40, 1, 5, 200];
console.log(numerosEj.sort((a, b) => a - b)); //lo ordena ascendente
console.log(numerosEj.sort((a, b) => b - a));//lo ordena descendiente



  

//SORT CON ARRAY DE OBJETOS...  
const items = [{ id: 1, nombre: "camisa", precio: 100 },
  { id: 2, nombre: "camisa 2", precio: 200 },
  { id: 3, nombre: "camisa 3", precio: 300 }]

 //ordeno por nombre 
console.log(
  items.sort((a, b) => {
    if (a.nombre > b.nombre) { 
      return -1
    }
    if (a.nombre < b.nombre) { 
      return -1
    }
    //a es igual a b
    return 0;
  }
  
  
  )
)


