/*OBJETOS
estructura de objetos
{
    clave1: valor1,
    clave2: valor2,
    claveN: valorN
}

*/

//para OBJETOS, ARREGLOS Y FUNCIONES (y constantes) usar const (no usar let)

const persona1 =
{
    nombre: "uno",
    edad: 1,
    direccion:"av uno"
};

//OBTENER DATOS DE LOS OBJETOS
//nombreObjeto.claveAobtener  (la mas comun)
console.log(persona1.nombre);
console.log(persona1.edad);

//sino se puede mostrar completo
console.log(persona1);

//otra forma (la ventaja que tiene es que se puede reemplazar por ej se puede pasar una variable)
console.log(persona1["nombre"]);

//ej con variable
let nomb = "nombre";
console.log(persona1[nomb]); //va a buscar la clave "nombre" porque le estoy pasando una variable que contiene "nombre"

//let propiedad = prompt("ingrese la propiedad que quiere consultar");

//alert(persona1[propiedad]); //esto busca la propiedad que ingresó (ej edad)


//tambien se puede AGREGAR propiedades al objeto o reemplazar con el . por ej

persona1.apellido = "prueba"; //esto agrega la propiedad apellido a persona1, en caso de existir la propeidad apellido, la reemplaza

console.log(persona1);

/*FUNCION CONSTRUCTORA DE CLASE (OBJETO), siempre inicia con function NombreObjeto (siempre mayuscula inicial)*/

function Persona(nombreParm, edadParm, direccionParm) {  //usar esa si se tienen 2-4 propiedades (recomendacion)
    this.nombre = nombreParm; //this tomaria el nombre del objeto que lo llame, más abajo el ejemplo sería persona2
    this.edad = edadParm;
    this.direccion = direccionParm; 
    //con this.nombrePropiedad le asigno el nombre a la propiedad y el = le guardo el dato a guardar que le viene por parm
}
//Persona2 es una constructora

const persona2 = new Persona("dos", 2, "AV dos"); 
//const nombreObjeto = new nombreConstructoraClase (parametros a pasar)
console.log(persona2);

persona2.nombre = persona1.nombre; //se pueden reeplazar de esta forma, nombre de uno por otro por ej.. pero al ser const no puedo poner persona2  =persona1
console.log(persona2);

/*buena práctica para tener una funcion con parms
se puede pasar un objeto que tenga esas propiedades
function Persona2(info){
    this.nombre = info.nombre;
    this.edad = info.edad;
}

*/

//se puede pasar de esta manera y  luego se llama como abajo
function Persona3 (info){ 
    this.nombre = info.nombre,
    this.edad = info.edad,
    this.direccion = info.direccion
}

//de esta manera le paso los parms en forma de objeto en vez de datos como parms, USAR ESTA si MÁS 3 propiedades, de otra manera es mejor usar (recomendacion) la otra
const persona3 = new Persona3({
    nombre: "prueba",
    edad: 26,
    direccion: "AV3"
})


/*METODO accion que puede hacer un objeto
la diferencia entre una funcion y un metodo es que el metodo esta ligado a un objeto (sin objeto no hay metodo)

los metodos terminan en () los atributos sin ()
ej 
.toUpperCase() - metodo
.lenght - propiedad


*/

//ej recorrer objeto con un for, for (const propiedad in objeto) 

for (const propiedad in persona1) { 
    console.log(propiedad);
}


function Persona4(nombreParm, edadParm, direccionParm) {  
    this.nombre = nombreParm;
    this.edad = edadParm;
    this.direccion = direccionParm; 
    this.hablar = function () {  //le agrego un metodo al objeto
        console.log(`hola soy ${this.nombre}`);
    }
}

const persona4 = new Persona4("pepito", 33, "av2");
persona4.hablar(); //metodo que llamo del objeto


//LO ANTERIOR ERA UN POCO VIEJO, ACTUALMENTE SE HACE DE ESTA MANERA!!!!!!!!!!
class PersonaNueva { 
    //constructor que crea el objeto
    constructor(nombreParm, edadParm, direccionParm) { 
        this.nombre = nombreParm;
        this.edad = edadParm;
        this.direccion = direccionParm;       
    }
    //metodos del objeto
    hablar() { 
        console.log(`hola soy ${this.nombre}`);
    }
}

const persona5 = new PersonaNueva("matias", 55, "av8");
persona5.hablar();


//EJEMPLO OBJETO DE UN PRODUCTO DE Mercadlolibre

class Producto { 
    constructor(nombreP, precioP, imagenP) { 
        this.nombre = nombreP;
        this.precio = precioP;
        this.imagen = imagenP;
        this.vendido = false; //esto deja una propiedad por defecto al crear el objeto ( en este caso vendido en false)
    }

    //metodo que pasa a vendido
    vender() { 
        this.vendido = true;
    }
}



const producto = new Producto("Kit pesas", 10600, "http://img.com");
const producto2 = new Producto("silla", 500, "http://img.com");

console.log(producto);
producto.vender(); //llamo metodo vender para producto, lo que pasa propiedad vendido a true
console.log(producto);


//ejemplo stock
class ProductoStock {
    constructor(nombreP, precioP, imagenP, cantidadP) {
        this.nombre = nombreP;
        this.precio = precioP;
        this.imagen = imagenP;
        this.cantidad = cantidadP;
    }

    //metodo que pasa a vendido
    vender() {
        if (this.cantidad > 0) {
            this.cantidad -= 1; // le resto 1 a cantidad        
        } else {
            console.log("ERROR, no hay stock");
        }
    }
}
const prod = new ProductoStock("stock", 1000, "img....", 3);
console.log(prod);
prod.vender();
console.log(prod);
prod.vender();
console.log(prod);
prod.vender();
console.log(prod);
prod.vender();