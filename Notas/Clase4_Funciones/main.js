/*FUNCIONES*/
/*
se escriben con la palabra function
function nombreFuncione(parametro, parametro...){
    codigo a ejecutar
}

si no tiene parametros de entrada  se pone vacio ()
*/
function saludar() { 
    console.log("hola");
}

saludar();


/*la idea es facilitar el reusar... podemos llamar a esta funcion dos veces y pediria el nombre dos veces en vez de repetir el codigo*/
function solicitarNombre() { 
    let nombreIngresado = prompt("ingresar nombre")
    alert("el nombre ingrsado es " + nombreIngresado);

}

/*solicitarNombre();
solicitarNombre();*/

/*funcion con parms*/
function mostrarParms(parm1, parm2) { 
    console.log(parm1 + " - " + parm2);
}

mostrarParms("hola", "prueba");
mostrarParms("prueba1", "prueba2");

/*ejemplo aplicado, sumar y mostrar*/

//declaracion de variable para guardar el resultado de la suma
let resultado = 0;

//funcion que suma dos nros y asigna a resultado
function sumar(nro1, nro2) { 
    resultado = nro1 + nro2;
}

//funcion que muestra resultado por consola
function mostrar(mensaje) { 
    console.log(mensaje);
}

//llamamos primero a sumar y luego a mostrar
sumar(6, 3);
mostrar(resultado);

//fin ejemplo sumar y mostrar

// tambien pueden devolver un resultado con RETURN

function sumarReturn(nro3, nro4) { 
    return nro4 + nro3;
}

let resultado2 = sumarReturn(5, 8); //llamamos la funcion que devuelve la suma y lo guardamos en una vaiable
console.log(resultado2);

/* ejemplo calculadora */

function calculadora(primerNro, segundoNro, operacion) { //le pasamos 3 parm, dos nro y una operacion
    switch (operacion) { //con el siwtch segun la operacion hago una cuenta y devuelvo en return
        case "+":  
            return primerNro + segundoNro;
            break;
        case "-":
            return primerNro - segundoNro;
            break;
        case "*":
            return primerNro * segundoNro;
            break;
        case "/":
            return primerNro / segundoNro;
            break;
        default:
            return 0;
            break;
    }
}

console.log(calculadora(10, 5, "*"));


/*SCOPE
scope o ámbito de una variable, js tiene dos scopes GLOBAL y LOCAL
GLOBALES
las globales se declaran fuera de los bloques o funciones..., puede ser referenciado desde cualquier otro punto del programa

ej 
let resultado = 0;  //por estar fuera ya se convierte en variable global (por más que esté dentro de una funcion)
function sumar(primernro,segundonro){
    resultado = primerNro + segundoNro;
}

LOCALES
se definen dentro de una funcion o bloque, es accesible únicamente dentro de ese espacio, si queremos usarla por fuera esa variable no va a existir

//si tenemos solo esto no va a funcionar
function sumar(primernro,segundonro){
    resultado = primerNro + segundoNro;
}
console.log(resultado); va a dar error porque resultado solo existe dentro de la funcion

SI HAY GLOBALES Y LOCALES CON EL MISMO NOMBRE, PARA EL PROGRAMA SON DIFERENTES!!

let nombre = "prueba" //variable global

function saludar(){
    let nombre = "pedro"; //variable local
    console.log(nomnbre);
}

console.log(nombre) //es la variable global, va a decir prueba

saludar() //va a decir pedro ya que accede a la local
*/

/* FUNCIONES ANONIMAS Y DE FLECHA*/

/* ANONIMAS
Es una funcion sin nombre y se utiliza para ser pasada como parametro  o asignada a una variable, en caso de asignarla a una variable, pueden llamar usando identificador de la variable declarada
*/

//generalmente las funciones anonimas se asignan a variables declaradas como constantes

const suma = function (a, b) { return a + b };
const resta = function (a, b) { return a - b };

console.log(suma(15, 20));
console.log(resta(15, 5));

/* FUNCIONES FLECHA
se identifican como las funciones anonimas de sintaxis simplificadas, no usan la palabra function pero usa => (flecha) entre los parametros y el bloque
*/
const suma2 = (a, b) => { return a + b };

//si es una funcion de una sola linea con retorno podemos evitar escribir el cuerpo
//ej:
const resta2 = (a, b) => a - b;

console.log(suma2(10, 20));
console.log(resta2(10, 5));

/*ejemplo aplicado  calcular precio*/

const suma3 = (a, b) => a + b;
const resta3 = (a, b) => a - b;

const iva = x => x * 0.21

let precioProd = 500;
let descuento = 50;

//calculo el precioProd + IVA - descuento
let nuevoPrecio = resta3(suma3(precioProd, iva(precioProd)), descuento);
console.log(nuevoPrecio);


