/*IDEA GENERAL DEL PROY
Simulador de precios según opciones seleccionadas (modelo, llantas, colores, interiores) de ciertos autos.
Cada modelo tendría diferentes opciones, seleccionaría cada item y debería actualizar dinámicamente las opciones/ img en la página además de tener un resumen de lo que va costando.
Tendría que ver como transformar la idea en objetos/ coleccion de objetos para que funcione bien en el pory final.
*/

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


