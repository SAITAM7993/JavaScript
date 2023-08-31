/*
setTimeout
estructura del setTimeout
setTimeout(funcionFlecha, tiempo en ms);  --  setTimeout(() => { console.log("hola");},5000);
*/
/*
setTimeout(() => {
    console.log("hola"); //ejecuta esto luego de que pasen 5s
},5000); */

/* 
console.log("inicio"); 

setTimeout(() => {
    console.log("intermedio"); 
}, 3000); 

console.log("fin"); 
//esto de arriba hace INICIO, FIN, INTERMEDIO .. ya que intermedio espera s
//si el el timeout lo seteara en 0 igualmente saldria ultimo ya que el settimout se va para call stack




/*
let uno = document.getElementById("UNO");
let dos = document.getElementById("DOS");

uno.addEventListener("click", () => {
    uno.classList.add("color"); //CON CLASSLIST puedo acceder a la lista de clases, con add agrego, con remove la quito
    setTimeout(() => {
    uno.classList.remove("color");
}, 3000);
});

//esto espera un segundo y LUEGO RECOORRE TODO EL STRING
for (const letra of "Hola") { //recorre el string hola
    setTimeout(() => {
        console.log(letra);
    },1000);    
}

//LUEGO DE 3S RECORRE TODO EL FOR
for (const letra of "Mundo") {
    setTimeout(() => {
        console.log(letra);
    },3000);    
}


function multiply(x, y) { 
    return x * y;
}
function printSquare(x) { 
    let resultado = multiply(x, x);
    console.log(resultado);
}

printSquare(5);

//ver EL CALL STACK (pila de ejecucion)

//EVENT LOOP (ver)



//SET INTERVAL .. hace que se ejecute en un loop infinito cada cierto intervalo
/*ejemplo setTimeout(() => {codigo);},intervalo);*/
/*
setInterval(() => {
    console.log("hola");
}, 1000);

//con clear interval se quita el intervalo

let counter = 0;
const interval = setInterval(() => {
    counter++;
    console.log("counter: ", counter);
    if (counter >= 5) { 
        clearInterval(interval); //esto elimina el intervalo que guardo en "interval"
        console.log("se removio el intervalo");
    }
}, 1000);
*/

//PROMESAS
/*
estructura de una promesa
new Promise((resolve, reject) => { 
    cuerpo de la promesa
})
si una promesa se rechaza hay que trabajarla.. no se puede hacer reject asi nomas
//tienen 3 estados, fullfilled (terminada con exito), pending (pendiente), rejected (rechazada) 
*/

const futuro = (valor) => { 
    return new Promise((resolve, reject) => { //pueden tener cualquier nombre, el resolve es el que daria ok, reject cuando da error
        setTimeout(() => {
            valor ? resolve("promesa resuelta") : reject("promesa rechazada"); //un caso de uso sería obtener una lista de un servidor en caso de resolve
        }, 1000);
    });
}

/*
valor ? resolve("promesa resuelta") : reject("promesa rechazada"); es lo mismo que 
if(valor){
      resolve("Promesa resuelta");
    }else{
      reject("Promesa rechazada")
    }
*/
//console.log(futuro(true));//devuelve promesa resuelta
//console.log(futuro(false));

//para manejar las las respuestas exitosas usamos el .then 
futuro(true).then((response) => console.log(response));

//para manejar las las respuestas exitosas usamos el .catch
futuro(false).catch((response) => console.log(response));

//se puede escribir como:
futuro(true)
    .then((response) => console.log(response)) //EN CASO DE OK
    .catch((response) => console.log(response)) // EN CASO DE OK
    .finally(() => console.log("proceso finalizado")); //SIEMPRE SE EJECUTA


//EJEMPLO SIMULAR CONEXION CON SERVIDOR ////////////////////////////////////////////

//ejemplo que simula una bd (BD)
const BD = [
    { id: 1, nombre: "uno", precio: 100 },
    { id: 2, nombre: "d", precio: 200 },
    { id: 3, nombre: "t", precio: 300 },
];


//funcion para obtener datos de una BD
const obtenerProductos = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(BD);
        },2000);
    });
}

//llamo a la funcion que obtiene productos
obtenerProductos()
    .then((response) => { //en caso de respuesta ok recorreria los items y crearia un div con el contenido
        response.forEach(item => { //como sabemos que la respuesta es un array lo recorremos con foreach
            let div = document.createElement("div");
            div.innerHTML = `
            <h2>ID: ${item.id}</h2>
            <p>Nombre: ${item.nombre}</p>
            <b>Precio: ${item.precio}</b>
            `;
            document.body.append(div);//le agrego el div creado
        });
    })
    .catch((error) => {
        let div = document.createElement("div");
        div.innerHTML = `Error intente luego ${error}`;
        document.body.append(div);
    }); 