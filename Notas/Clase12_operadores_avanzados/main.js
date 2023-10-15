//OPERADOR ++


//OPERADOR TERNARIO
//estructura:
//condicion ? codigo cuando condicion es verdadera : codigo cuando condicion es falsa

let edad = 15;
if (edad >= 18) { 
    console.log("eres menor");
}else{
    console.log("eres mayor");
}
//SIMPLIFICA EL IF ELSE
edad >= 18 ? console.log("eres mayor") : console.log("eres menor");

const usuario = {
    nombre: "juan",
    edad: 23
};

//asigno permiso en true si edad es mayor o igual a 18, sino false
let permiso = usuario.edad >= 18 ? true : false;
permiso ? console.log("puede entrar") : console.log("no puede entrar"); //pregunto si permiso es true


/*
operador1 && operador2 retorna operador1 si operador1 es false, en caso contrario retorna operador2
operador1 || operador2 retorna operador1 si este es verdadero, en caso contrario retorna false
*/

const carrito = [];

if (carrito.length === 0) {
    console.log("el carrito esta vacio")
}

//lo de arriba se puede simplificar como // si carrito es 0 ENTONCES devulvo lo segundo .. 
//uso operador1 && operador2 para decir si lo primero no se cumple, mostra lo segundo 
carrito.lentgh === 0 && console.log("el carrito está vacio");


//otro ejemplo
const usuario2 = {
    edad: 14,
    nombre: "john",
};

//Si lo de la izq es falso, devuelvelve el operador 1
const registro = usuario.edad >= 18 && new Date();
console.log(registro);

//ejemplo de que devuelve el or, si lo de la izq es verdadero retorna el operador de la izq.., sino lo de la derecha

console.log(40 || "falsy");  //40
console.log(true || "falsy"); //true
console.log("hola" || "falsy"); //hola mundo
console.log(null || "falsy");  //falsy
console.log(undefined || "falsy"); //falsy
console.log("" || "falsy");  //falsy
console.log(NaN || "falsy"); //falsy
console.log(false || "falsy"); //falsy
console.log(0 || "falsy");  //falsy

//ejemplo
const usuario3 = {
    edad: 12,
    nombre: "juan",
};
const usuario4 = null;
console.log(usuario3 || "el usuario no existe"); //como este existe tira el usuario3
console.log(usuario4 || "el usuario no existe"); //como este está en null, devuelve el mensaje de la izq

//una manera de verlo es: si lo de la izq es false, se ejecuta lo siguiente a la derecha, sino lo de la izq

//otro ej practico
/*
let carrito2;
let carritoStorage = JSON.parse(localStorage.getItem("carrito"));


if (carritoStorage) {
    carrito = carritoStorage;
} else { 
    carrito = [];
}*/

//esta linea es igual a TODO el cod anterior de ej carrito
//let carrito2 = JSON.parse(localStorage.getItem("carrito")) || [];

//ACCESO CONDICIONAL A UN OBJETO
const usu = null;
console.log(usu?.nombre || "El usuario no existe"); 
//SOLAMENTE PONEMOS ? ANTES DEL ., en estre ej si el usuario esta cargado muestra el nombre, sino el mensaje


//DESESTRUCTURACION

const usu2 = {
    nom: "juan",
    eda: 22,
    dir: "av"
};

//se puede hacerlo normal..
//let nom = usu2.nombre;
//let ed = usu2.edad;
//let dire = usu2.edad;

//o se puede hacer más sencillo

let { nom:nombrePersona, eda:edadPersona } = usu2; //SE TIENE QUE PONER LA CLAVE COMO ES, ej nom, eda, dir y se le puede  dar un alias por ej nombrePersona
//se escribe let {}
/*
console.log(nombrePersona);
console.log(edadPersona);

 const usu5 = {
  nombre: "juan",
  edad: 23,
  direccion: "AV",
  telefonos: {
    casa: 1234,
    celular: 34,
    trabajo: 234,
     },
 };

const {
  nombre: nomPersona, //le doy un alias nomPersona
  telefonos: { casa }, //tomo el dato tel de la casa
} = usuario;
*/

//desestructuracion por parametros
//por ej hacemos una funcion que desestructura

const destructurar = ({ nombre, edad }) => {
    console.log(nombre, edad);
};

//desestructurar({ nombre: "juan", edad: 45, dreccion: "AV" });

//ej con desestructurar arreglos
/*
const nombres = ["uno", "dos", "tres"];

const [a, b, c] = nombres; //esto me guarda los nombres en cada letra... en caso de no querer uno se deja espacio en blanco, ej
const [d, , g] = nombres;
*/

//ejemplo desestructuracion de 3 niveles de propietarios de casa
const mascota = {
    nombre: "zeus",
    edad: 3,
    propietario: {
        casa: {
            propietario1: "juan",
            propietario2: "pepito",
        },
        oficina: {
            propietario1: "manuela",
        },
    },
};

const {
    nombre, 
    propietario: { //se accede con :{ lo que quiero}
        casa: { propietario1, propietario2
        },
        oficina:{propietario1: propietario1Oficina} //en este caso tengo que renombrar si o si porque los dos se llamarian propietario1 originalmente
    }
} = mascota;

console.log(propietario1);
console.log(propietario2);
console.log(propietario1Oficina);