
//... spread operator
const nombres = ["juan", "maria", "sofia"];
console.log(nombres);
console.log(...nombres); //console.log(nombres.join(" ")); hace algo parecido a esto anterior

const numeros = [1, 2, 3, 56, 7];
console.log(Math.max(...numeros)); // el ... separa los numeros y los deja como en una cadena no en un array ej 1 2 3 56 7


//pasaje por valor
let nombre1 = "andres";
let nombre2 = nombre1;
nombre2 = "camila";
console.log(nombre1); 
//hay paso por valor cuando tenemos paso de variables entre datos primitivos (string, boolean, numerico)



//pasaje por referencia
const persona1 = { nombre: "andres", edad: 26 };
const persona2 = persona1;

persona2.nombre = "camila";
console.log(persona1);
//tenemos paso por referencia cuando tenemos paso de datos de objetos, arrays..


//SI QUIERO HACER UNA COPIA DE UN OBJETO PODEMOS HACER
const persona3 = { ...persona1 }; //con esto hago una copia de un objetom no hago referencia a persona 1


const usuario = {
    nombre: "juan",
    edad: 24,
    curso: "js"
};

//de esta manera hago una copia de usuario, le modifico la propiedad CURSO porque YA EXISTÍA, y si le agrego otra propiedad LA CREA
const usuario1 = {
    ...usuario, //EL COPIADO SIEMPRE VA PRIMERO
    curso: "react",
    direccion: "AV"
}

//REST PARAMETER

function sumar(...numeros) { //en este caso los ... significan que se van a poder pasar CUALQUIER CANTIDAD DE PARÁMETROS Y los guarda en un arreglo con todos esos parm (en este ejemplo)
    console.log(numeros);
}

sumar(5, 6, 7, 8, 9);
