/*IDEA GENERAL DEL PROY
Simulador de precios según opciones seleccionadas (modelo, llantas, colores, interiores) de ciertos autos.
Cada modelo tendría diferentes opciones, seleccionaría cada item y debería actualizar dinámicamente las opciones/ img en la página además de tener un resumen de lo que va costando.
Tendría que ver como transformar la idea en objetos/ coleccion de objetos para que funcione bien en el pory final.
*/


/*CONSTRUCTORES*/

//constructor OBJETO AUTO

class Auto { 
    constructor(id, modelo,precio, colores, llantas, interiores) { 
        this.id = id;
        this.modelo = modelo;
        this.precio = precio; 
        this.colores = colores; //array de colores (nombre, precio, img, seleccionado)
        this.llantas = llantas;//array de llantas (nombre, precio, img, seleccionado)
        this.interiores = interiores; //array de interiores (nombre, precio, img, seleccionado)
        this.seleccionado = false; 
        //ver si poner img por defecto
    }
    seleccionar() {
        this.seleccionado = true; //para marcar como seleccionado
    }
        
}

//Esto aplica para LLANTAS e INTERIORES
class Opcion { 
    constructor(id, nombre, precio, img) { 
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;       
        this.seleccionado = false;
    }
    seleccionar() {
    this.seleccionado = true; //para marcar como seleccionado
  }
}

//este es especifico para colores porque le voy a dar 3 img segun la llanta
class Color { 
    constructor(id, nombre, precio, imgA, imgB, imgC, imgFrente) { 
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imgA = imgA;   
        this.imgB = imgB; 
        this.imgC = imgC;   
        this.imgFrente = imgFrente;
        this.seleccionado = false;
    }
    seleccionar() {
    this.seleccionado = true; //para marcar como seleccionado
  }
}

/* CONSTRUCTORES FIN*/


//FUNCION GENERICA para que pida dato nuevamente en caso de error hasta que de ok
function pedirOpc(rangoA, rangoB, categoria) {
    let opc = parseInt(prompt(`Seleccione ${categoria} [${rangoA} al ${rangoB}]`));
    while (opc < rangoA || opc > rangoB){    
		 opc = parseInt(prompt(`ERROR: Seleccione ${categoria} [${rangoA} al ${rangoB}]`));	
    } 
	return opc;
}

//FUNCIONES especificas para pedir una opcion

function pedirModelo(){
	return pedirOpc(1, 4, "MODELO");
}

function pedirLlantas(){
	return pedirOpc(1, 3, "LLANTAS");
}

function pedirColor(){	
	return pedirOpc(1, 7, "COLOR");
}

function pedirInterior(){
	return pedirOpc(1, 4, "INTERIOR");
}


//Pido todos los datos y lo devuelvo en un array
function pedirTodo() {    
    return [pedirModelo(), pedirLlantas(), pedirColor(), pedirInterior()]; //retorno una coleccion con las opcioens seleccionadas
}


//FUNCION PARA CALCULAR PRECIOS
function calcularPrecio(categoria, opc){
//para simplificar supongo que las llantas, colores, interiores salen lo mismo para cada modelo
    let precio = 0;
    
    switch(categoria){
        case "MODELO":	             
            switch(opc){
                case 1:
                   
                    precio = 10000;
                break;
                case 2:
                    precio = 15000;
                break;
                case 3:
                    precio = 20000;
                break;
                case 4:
                    precio = 25000;
                break;
                case 5:
                    precio = 30000;
                break;
            }
        break;
        case "LLANTAS":
            switch(opc){
                    case 1:
                        precio = 0;
                    break;
                    case 2:
                        precio = 1500;
                    break;
                    case 3:
                        precio = 2000;
                    break;				
                }
        break;
        case "COLORES":
            switch(opc){
                    case 1:
                        precio = 0;
                    break;
                    case 2:
                        precio = 1500;
                    break;
                    case 3:
                        precio = 1500;
                    break;
                    case 4:
                        precio = 2500;
                    break;
                    case 5:
                        precio = 5000;
                    break;
                    case 6:
                        precio = 5000;
                    break;
                    case 7:
                        precio = 10000;
                    break;
                }
            break;
        case "INTERIOR":
            switch(opc){
                    case 1:
                        precio = 0;
                    break;
                    case 2:
                        precio = 1500;
                    break;
                    case 3:
                        precio = 2000;
                    break;	
                    case 4:
                        precio = 2000;
                    break;				
            }
        break;
    } 
    return precio;
}

/*
function obtenerPrecios() {
    return [
        calcularPrecio("MODELO", opciones[0]),
        calcularPrecio("LLANTAS", opciones[1]),
        calcularPrecio("COLORES", opciones[2]),
        calcularPrecio("INTERIOR", opciones[3])
    ];
}
	
let opciones = pedirTodo(); //coleccion de opcioens seleccionadas
let precios = obtenerPrecios();
let total = precios[0] + precios[1] + precios[2] + precios[3];
alert(`Usted seleccionó:\n  
	MODELO: ${opciones[0]} - $ ${precios[0]}\n 
	LLANTAS: ${opciones[1]} - $ ${precios[1]}\n 
	COLOR:  ${opciones[2]} - $ ${precios[2]}\n 
	INTERIOR:  ${opciones[3]} - $ ${precios[3]}\n 
	TOTAL: $ ${total}`);


*/

//creo las opciones para cada auto

//LLANTAS
const llantas_modelo1 = [];
llantas_modelo1.push(new Opcion(1, "llanta A", 100, "IMG A"));
llantas_modelo1.push(new Opcion(2, "llanta B", 200, "IMG B"));
llantas_modelo1.push(new Opcion(3, "llanta C", 300, "IMG C"));

const llantas_modelo2 = [];
llantas_modelo2.push(new Opcion(1, "llanta A", 100, "IMG A"));
llantas_modelo2.push(new Opcion(2, "llanta B", 200, "IMG B"));
llantas_modelo2.push(new Opcion(3, "llanta C", 300, "IMG C"));

const llantas_modelo3 = [];
llantas_modelo3.push(new Opcion(1, "llanta A", 100, "IMG A"));
llantas_modelo3.push(new Opcion(2, "llanta B", 200, "IMG B"));
llantas_modelo3.push(new Opcion(3, "llanta C", 300, "IMG C"));

const llantas_modelo4 = [];
llantas_modelo4.push(new Opcion(1, "llanta A", 100, "IMG A"));
llantas_modelo4.push(new Opcion(2, "llanta B", 200, "IMG B"));
llantas_modelo4.push(new Opcion(3, "llanta C", 300, "IMG C"));

//INTERIORES
const interiores_modelo1 = [];
interiores_modelo1.push(new Opcion(1, "interior A", 100, "IMG A"));
interiores_modelo1.push(new Opcion(2, "interior B", 200, "IMG B"));
interiores_modelo1.push(new Opcion(3, "interior C", 300, "IMG C"));
interiores_modelo1.push(new Opcion(4, "interior D", 400, "IMG D"));

const interiores_modelo2 = [];
interiores_modelo2.push(new Opcion(1, "interior A", 100, "IMG A"));
interiores_modelo2.push(new Opcion(2, "interior B", 200, "IMG B"));
interiores_modelo2.push(new Opcion(3, "interior C", 300, "IMG C"));
interiores_modelo2.push(new Opcion(4, "interior D", 400, "IMG D"));

const interiores_modelo3 = [];
interiores_modelo3.push(new Opcion(1, "interior A", 100, "IMG A"));
interiores_modelo3.push(new Opcion(2, "interior B", 200, "IMG B"));
interiores_modelo3.push(new Opcion(3, "interior C", 300, "IMG C"));
interiores_modelo3.push(new Opcion(4, "interior D", 400, "IMG D"));

const interiores_modelo4 = [];
interiores_modelo4.push(new Opcion(1, "interior A", 100, "IMG A"));
interiores_modelo4.push(new Opcion(2, "interior B", 200, "IMG B"));
interiores_modelo4.push(new Opcion(3, "interior C", 300, "IMG C"));
interiores_modelo4.push(new Opcion(4, "interior D", 400, "IMG D"));

//COLORES
const colores_modelo1 = [];
colores_modelo1.push(new Color(1, "blanco"  , 1000  , "IMG 1A", "IMG 1B", "IMG 1C", "IMG 1 Frente"));
colores_modelo1.push(new Color(2, "gris"    , 2000  , "IMG 2A", "IMG 2B", "IMG 2C", "IMG 2 Frente"));
colores_modelo1.push(new Color(3, "negro"   , 3000  , "IMG 3A", "IMG 3B", "IMG 3C", "IMG 3 Frente"));
colores_modelo1.push(new Color(4, "rojo"    , 4000  , "IMG 4A", "IMG 4B", "IMG 4B", "IMG 4 Frente"));
colores_modelo1.push(new Color(5, "amarillo", 8000  , "IMG 5A", "IMG 5B", "IMG 5C", "IMG 5 Frente"));
colores_modelo1.push(new Color(6, "verde"   , 10000 , "IMG 6A", "IMG 6B", "IMG 6C", "IMG 6 Frente"));
colores_modelo1.push(new Color(7, "naranja" , 20000 , "IMG 7A", "IMG 7B", "IMG 7C", "IMG 7 Frente"));

const colores_modelo2 = [];
colores_modelo2.push(new Color(1, "blanco"  , 1000  , "IMG 1A", "IMG 1B", "IMG 1C", "IMG 1 Frente"));
colores_modelo2.push(new Color(2, "gris"    , 2000  , "IMG 2A", "IMG 2B", "IMG 2C", "IMG 2 Frente"));
colores_modelo2.push(new Color(3, "negro"   , 3000  , "IMG 3A", "IMG 3B", "IMG 3C", "IMG 3 Frente"));
colores_modelo2.push(new Color(4, "rojo"    , 4000  , "IMG 4A", "IMG 4B", "IMG 4B", "IMG 4 Frente"));
colores_modelo2.push(new Color(5, "amarillo", 8000  , "IMG 5A", "IMG 5B", "IMG 5C", "IMG 5 Frente"));
colores_modelo2.push(new Color(6, "verde"   , 10000 , "IMG 6A", "IMG 6B", "IMG 6C", "IMG 6 Frente"));
colores_modelo2.push(new Color(7, "naranja" , 20000 , "IMG 7A", "IMG 7B", "IMG 7C", "IMG 7 Frente"));


const colores_modelo3 = [];
colores_modelo3.push(new Color(1, "blanco"  , 1000  , "IMG 1A", "IMG 1B", "IMG 1C", "IMG 1 Frente"));
colores_modelo3.push(new Color(2, "gris"    , 2000  , "IMG 2A", "IMG 2B", "IMG 2C", "IMG 2 Frente"));
colores_modelo3.push(new Color(3, "negro"   , 3000  , "IMG 3A", "IMG 3B", "IMG 3C", "IMG 3 Frente"));
colores_modelo3.push(new Color(4, "rojo"    , 4000  , "IMG 4A", "IMG 4B", "IMG 4B", "IMG 4 Frente"));
colores_modelo3.push(new Color(5, "amarillo", 8000  , "IMG 5A", "IMG 5B", "IMG 5C", "IMG 5 Frente"));
colores_modelo3.push(new Color(6, "verde"   , 10000 , "IMG 6A", "IMG 6B", "IMG 6C", "IMG 6 Frente"));
colores_modelo3.push(new Color(7, "naranja"  ,20000 , "IMG 7A", "IMG 7B", "IMG 7C", "IMG 7 Frente"));

const colores_modelo4 = [];
colores_modelo4.push(new Color(1, "blanco"  , 1000  , "IMG 1A", "IMG 1B", "IMG 1C", "IMG 1 Frente"));
colores_modelo4.push(new Color(2, "gris"    , 2000  , "IMG 2A", "IMG 2B", "IMG 2C", "IMG 2 Frente"));
colores_modelo4.push(new Color(3, "negro"   , 3000  , "IMG 3A", "IMG 3B", "IMG 3C", "IMG 3 Frente"));
colores_modelo4.push(new Color(4, "rojo"    , 4000  , "IMG 4A", "IMG 4B", "IMG 4B", "IMG 4 Frente"));
colores_modelo4.push(new Color(5, "amarillo", 8000  , "IMG 5A", "IMG 5B", "IMG 5C", "IMG 5 Frente"));
colores_modelo4.push(new Color(6, "verde"   , 10000 , "IMG 6A", "IMG 6B", "IMG 6C", "IMG 6 Frente"));
colores_modelo4.push(new Color(7, "naranja" , 20000 , "IMG 7A", "IMG 7B", "IMG 7C", "IMG 7 Frente"));


//AUTOS (array de autos en donde inserto cada modelo)
const autos = [];
autos.push(new Auto(1, "modelo 1", 10000, colores_modelo1, llantas_modelo1, interiores_modelo1));
autos.push(new Auto(2, "modelo 2", 15000, colores_modelo2, llantas_modelo2, interiores_modelo2));
autos.push(new Auto(3, "modelo 3", 20000, colores_modelo3, llantas_modelo3, interiores_modelo3));
autos.push(new Auto(4, "modelo 4", 25000, colores_modelo4, llantas_modelo4, interiores_modelo4));

//console.log(autos[3]);
//console.log(autos[1].colores[1].imgA);
console.log("AUTO: " +autos[1].seleccionado);
autos[1].seleccionar();
console.log("AUTO: " +autos[1].seleccionado);

console.log("COLOR: " + autos[1].colores[2].seleccionado);
autos[1].colores[2].seleccionar();
console.log("COLOR: " + autos[1].colores[2].seleccionado);


console.log(autos[1]);
console.log(autos[1].colores);
