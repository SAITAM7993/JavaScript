//OBJETO Math (se escribe exacto)
console.log(Math.E); //constante euler
console.log(Math.PI); //constante pi
console.log(Math.max(3, 5, 7, 99, 4, 333, 698)); //nro maximo de una lista
console.log(Math.min(3, 5, 7, 99, 4, 333, 698)); //nro minimo de una lista

console.log(Math.max(1, 2, 3, Infinity)); //Infinity es infinito
console.log(Math.min(1, 2, 3, -Infinity)); //Infinity se le puede poner - para -infinito

console.log(Math.ceil(3.45)); //ceil aproxima hacia arriba (al entero próximo mayor (4))
console.log(Math.floor(3.45)); //ceil aproxima hacia abajo (al entero proximo menor (3))

console.log(Math.round(3.1)); //round aproxima al entero más proximo (3)
console.log(Math.round(3.6)); //4

console.log(Math.sqrt(9)); //sqrt es raiz cuadrada
console.log(Math.sqrt(2));
console.log(Math.sqrt(1));
console.log(Math.sqrt(-16)); //si da error devuelve NaN not a number

console.log(Math.random()); //random  sin parms da un nro random entre 0 y 1 (con comas)
console.log(Math.random() * 10); //si se le agrega un * 10 (o el que se quiera) da un nro entre 1 y 10 (con comas)
console.log(Math.round(Math.random() * 10)); //si le ponemos el round lo redondea
console.log(Math.round(Math.random() * 7 + 10)); //si quiero un nro por ej entre 10 y 17 primero le pongo un *7 y luego un +10 (amplitud + desplazamiento)

const generarAleatorio = (amplitud, desplazamiento) => {
  return Math.round(Math.random() * amplitud + desplazamiento);
};

console.log(generarAleatorio(27, 10)); //esto va a generar un nro entre 10 y 37

//crear una funcion que genere nombres aleatorios

const nombres = ["nombre1", "nombre2", "nombre3", "nombre4", "nombre5"];//creo arreglo de nombres

function generarNombre(arregloNombres) { 
  return arregloNombres[generarAleatorio(arregloNombres.length -1, 0)]; //el -1 es porque empieza desde 0 el array, entonces el largo va a ser 1 menor
  //retorno dos nombres aleatorios concatenados, uso generar aleatorio con desplazamiento 0 para que este entre 0 y el largo del arreglo
}

let nombre = generarNombre(nombres);
console.log(nombre);

//FECHAS
//console.log(Date());//devuelve la fecha en formato Tue Aug 01 2023 20:07:43 GMT-0300 (hora estándar de Uruguay)
//const navidad = new Date(2023, 11, 24) //LOS MESES ARRANCAN DESDE 0, se le pasa año, mes, dia
//console.log(navidad);

const navidad = new Date("December 24, 2023"); //tambien se le puede pasar por string
console.log(navidad);

//se le puede dar formato a la fecha CON . toPropiedad
console.log(navidad.toDateString()); //Sun Dec 24 2023
console.log(navidad.toLocaleString()); //24/12/2023, 23:59:59
console.log(navidad.toLocaleDateString()); //24/12/2023
console.log(navidad.toTimeString()); //23:59:59 GMT-0300 (hora estándar de Uruguay)
console.log(navidad.getFullYear());//devuelve el año (2023)

//tambien se pueden hacer calculos
const hoy = new Date("August 1, 2023");

//saber diferencia entre hoy y navidad

console.log(navidad - hoy); //se devuelve en milisegundos (en un día hay 86400000)
const milisegundosPorDia = 86400000;
console.log((navidad - hoy) / milisegundosPorDia) //con esto divido entre ms por día y obtengo la cantidad de dias entre navidad y hoy

//libreria lookson (para hacer cuentas entre fechas)

