/*IDEA GENERAL DEL PROY
Simulador de precios según opciones seleccionadas (modelo, llantas, colores, interiores) de ciertos autos.
Cada modelo tendría diferentes opciones, seleccionaría cada item y debería actualizar dinámicamente las opciones/ img en la página 

flujo para 3era entrega
- precargar los modelos con las img del array de autos en el HTML
- Luego precargar los colores e interiores del primer auto por default en el HTML y guardar el AUTO
- Cuando haga click en otro modelo reemplazar el default (trabajaria con un solo objeto auto)
- cuando le de click a "consultar precio" hacer un resumen y calcular el total del auto final mostrandolo en el html como una pantalla emergente

notas: por ahora quito los seleccionados, trabajo por ID de opción seleccionada y UN solo objeto a la vez
*/

/**************************************************
CONSTRUCTORES
**************************************************/ 

//AUTO
class Auto { 
    constructor(id, modelo,precio, colores, interiores) { 
        this.id = id;
        this.nombre = modelo;
        this.precio = precio; 
        this.colores = colores; //array de colores (nombre, precio, imgA, imgB, imgC, imgFrente)       
        this.interiores = interiores; //array de interiores (nombre, precio, img)           
    } 
        
}
//Esto aplica para COLORES e INTERIORES 
class Opcion { 
    constructor(id, nombre, precio, imgA, imgB, imgC) { 
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imgA = imgA; //para colores la img del color para el interior img del interior
        this.imgB = imgB; //solo para colores ya que guardo img de frente  
        this.imgC = imgC; //solo para colores ya que guardo img perfil
    }
};

/**************************************************
CONSTRUCTORES - FIN
**************************************************/ 


/**************************************************
FUNCIONES
**************************************************/ 

//Función genérica para que pida dato nuevamente en caso de error hasta que de ok
function pedirOpc(rangoA, rangoB, categoria) {
    let opc = parseInt(prompt(`Seleccione ${categoria} [${rangoA} al ${rangoB-1}]`));
    while (opc < rangoA || opc > rangoB){    
		 opc = parseInt(prompt(`ERROR: Seleccione ${categoria} [${rangoA-1} al ${rangoB}]`));	
    } 
	return opc;
}

//calcula el total dados 3 objetos que contienen precio
function calcularTotal(auto, color, interior) {     
    return auto.precio + color.precio + interior.precio;   
};

//creo el mensaje de resumen con los precios de cada opc seleccionada y el total
function obtenerMensajeResumen(auto, color, interior) {
    let mensaje = 'Usted seleccionó: \n';
    mensaje += `Modelo:  ${auto.nombre} - $ ${auto.precio}\n`;
    mensaje += `Color:  ${color.nombre} - $ ${color.precio}\n`;
    mensaje += `Interior: ${interior.nombre} - $ ${interior.precio}\n`;
    
    let total = calcularTotal(auto, color, interior);
    mensaje += `Total: $ ${total}\n`; 
    return mensaje;
};

//genero una lista de items para mostrar antes de que seleccione 
const generarLista = (arreglo) => {
    let mensaje = 'Opciones disponibles \n'
    let info = arreglo.map((item) =>`[${item.id}] ${item.nombre} - $ ${item.precio}`);
    mensaje += info.join('\n');
    return mensaje;
}

/**************************************************
FUNCIONES - FIN
**************************************************/

/**************************************************
CREO LOS AUTOS Y OPCIONES PARA C/U (interiores, colores)
**************************************************/ 
//INTERIORES
const interiores_modelo1 = [
    new Opcion(0, "interior A", 9999, "../media/cars/e_tron_R8/interior/A.webp"),
    new Opcion(1, "interior B", 2000, "../media/cars/e_tron_R8/interior/B.webp"),
    new Opcion(2, "interior C", 3000, "../media/cars/e_tron_R8/interior/C.webp"),
    new Opcion(3, "interior D", 4000, "../media/cars/e_tron_R8/interior/D.webp")
];
const interiores_modelo2 = [
    new Opcion(0, "interior A", 100, "../media/cars/r8/interior/A.webp"),
    new Opcion(1, "interior B", 200, "../media/cars/r8/interior/B.webp"),
    new Opcion(2, "interior C", 300, "../media/cars/r8/interior/C.webp"),
    new Opcion(3, "interior D", 400, "../media/cars/r8/interior/D.webp")
];
const interiores_modelo3 = [
    new Opcion(0, "interior A", 100, "../media/cars/rs3_sedan/interior/A.webp"),
    new Opcion(1, "interior B", 200, "../media/cars/rs3_sedan//interior/B.webp"),
    new Opcion(2, "interior C", 300, "../media/cars/rs3_sedan//interior/C.webp"),
    new Opcion(3, "interior D", 400, "../media/cars/rs3_sedan//interior/D.webp")
];
const interiores_modelo4 = [
    new Opcion(0, "interior A", 100, "../media/cars/s3_sportback_tfsi/interior/A.webp"),
    new Opcion(1, "interior B", 200, "../media/cars/s3_sportback_tfsi/interior/B.webp"),
    new Opcion(2, "interior C", 300, "../media/cars/s3_sportback_tfsi/interior/C.webp"),
    new Opcion(3, "interior D", 400, "../media/cars/s3_sportback_tfsi/interior/D.webp")
];
//COLORES
const colores_modelo1 = [
    new Opcion(0, "blanco", 9999,
        "../media/cars/e_tron_R8/colores/1.webp",
        "../media/cars/e_tron_R8/perfil/1.webp",
        "../media/cars/e_tron_R8/frente/1.webp"),
    new Opcion(1, "gris", 2000,     
        "../media/cars/e_tron_R8/colores/2.webp",
        "../media/cars/e_tron_R8/perfil/2.webp",
        "../media/cars/e_tron_R8/frente/2.webp"),    
    new Opcion(2, "negro", 3000,
        "../media/cars/e_tron_R8/colores/3.webp",
        "../media/cars/e_tron_R8/perfil/3.webp"),
    new Opcion(3, "rojo", 4000,
        "../media/cars/e_tron_R8/colores/4.webp",
        "../media/cars/e_tron_R8/perfil/4.webp",
        "../media/cars/e_tron_R8/frente/4.webp"),    
    new Opcion(4, "amarillo", 8000,
        "../media/cars/e_tron_R8/colores/5.webp",
        "../media/cars/e_tron_R8/perfil/5.webp",
        "../media/cars/e_tron_R8/frente/5.webp"),    
    new Opcion(5, "verde", 10000,
        "../media/cars/e_tron_R8/colores/6.webp",
        "../media/cars/e_tron_R8/perfil/6.webp",
        "../media/cars/e_tron_R8/frente/6.webp"),    
    new Opcion(6, "naranja", 20000,
        "../media/cars/e_tron_R8/colores/7.webp",
        "../media/cars/e_tron_R8/perfil/7.webp",
        "../media/cars/e_tron_R8/frente/7.webp"),
];
const colores_modelo2 = [
    new Opcion(0, "blanco", 9999,
        "../media/cars/r8/colores/1.webp",
        "../media/cars/r8/perfil/1.webp",
        "../media/cars/r8/frente/1.webp"),
    new Opcion(1, "gris", 2000,
        "../media/cars/r8/colores/2.webp",
        "../media/cars/r8/perfil/2.webp",
        "../media/cars/r8/frente/2.webp"),
    new Opcion(2, "negro", 3000,
        "../media/cars/r8/colores/3.webp",
        "../media/cars/r8/perfil/3.webp",
        "../media/cars/r8/frente/3.webp"),
    new Opcion(3, "rojo", 4000,
        "../media/cars/r8/colores/4.webp",
        "../media/cars/r8/perfil/4.webp",
        "../media/cars/r8/frente/4.webp"),
    new Opcion(4, "amarillo", 8000,
        "../media/cars/r8/colores/5.webp",
        "../media/cars/r8/perfil/5.webp",
        "../media/cars/r8/frente/5.webp"),
    new Opcion(5, "verde", 10000,
        "../media/cars/r8/colores/6.webp",
        "../media/cars/r8/perfil/6.webp",
        "../media/cars/r8/frente/6.webp"),
    new Opcion(6, "naranja", 20000,
        "../media/cars/r8/colores/7.webp",
        "../media/cars/r8/perfil/7.webp",
        "../media/cars/r8/frente/7.webp")
];
const colores_modelo3 = [
    new Opcion(0, "blanco", 1000,
        "../media/cars/rs3_sedan/colores/1.webp",
        "../media/cars/rs3_sedan/perfil/1.webp",
        "../media/cars/rs3_sedan/frente/1.webp"),
    new Opcion(1, "gris", 2000,
        "../media/cars/rs3_sedan/colores/2.webp",
        "../media/cars/rs3_sedan/perfil/2.webp",
        "../media/cars/rs3_sedan/frente/2.webp"),
    new Opcion(2, "negro", 3000,
        "../media/cars/rs3_sedan/colores/3.webp",
        "../media/cars/rs3_sedan/perfil/3.webp",
        "../media/cars/rs3_sedan/frente/3.webp"),
    new Opcion(3, "rojo", 4000,
        "../media/cars/rs3_sedan/colores/4.webp",
        "../media/cars/rs3_sedan/perfil/4.webp",
        "../media/cars/rs3_sedan/frente/4.webp"),
    new Opcion(4, "amarillo", 8000,
        "../media/cars/rs3_sedan/colores/5.webp",
        "../media/cars/rs3_sedan/perfil/5.webp",
        "../media/cars/rs3_sedan/frente/5.webp"),
    new Opcion(5, "verde", 10000,
        "../media/cars/rs3_sedan/colores/6.webp",
        "../media/cars/rs3_sedan/perfil/6.webp",
        "../media/cars/rs3_sedan/frente/6.webp"),
    new Opcion(6, "naranja", 20000,
        "../media/cars/rs3_sedan/colores/7.webp",
        "../media/cars/rs3_sedan/perfil/7.webp",
        "../media/cars/rs3_sedan/frente/7.webp")
];
const colores_modelo4 = [
    new Opcion(0, "blanco", 1000,
        "../media/cars/s3_sportback_tfsi/colores/1.webp",
        "../media/cars/s3_sportback_tfsi/perfil/1.webp",
        "../media/cars/s3_sportback_tfsi/frente/1.webp"),
    new Opcion(1, "gris", 2000,
        "../media/cars/s3_sportback_tfsi/colores/2.webp",
        "../media/cars/s3_sportback_tfsi/perfil/2.webp",
        "../media/cars/s3_sportback_tfsi/frente/2.webp"),
    new Opcion(2, "negro", 3000,
        "../media/cars/s3_sportback_tfsi/colores/3.webp",
        "../media/cars/s3_sportback_tfsi/perfil/3.webp",
        "../media/cars/s3_sportback_tfsi/frente/3.webp"),
    new Opcion(3, "rojo", 4000,
        "../media/cars/s3_sportback_tfsi/colores/4.webp",
        "../media/cars/s3_sportback_tfsi/perfil/4.webp",
        "../media/cars/s3_sportback_tfsi/frente/4.webp"),
    new Opcion(4, "amarillo", 8000,
        "../media/cars/s3_sportback_tfsi/colores/5.webp",
        "../media/cars/s3_sportback_tfsi/perfil/5.webp",
        "../media/cars/s3_sportback_tfsi/frente/5.webp"),
    new Opcion(5, "verde", 10000,
        "../media/cars/s3_sportback_tfsi/colores/6.webp",
        "../media/cars/s3_sportback_tfsi/perfil/6.webp",
        "../media/cars/s3_sportback_tfsi/frente/6.webp"),
    new Opcion(6, "naranja", 20000,
        "../media/cars/s3_sportback_tfsi/colores/7.webp",
        "../media/cars/s3_sportback_tfsi/perfil/7.webp",
        "../media/cars/s3_sportback_tfsi/frente/7.webp")
];
//AUTOS (array de autos en donde inserto cada modelo)
const autos = [
    new Auto(0, "modelo 1", 10000, colores_modelo1, interiores_modelo1),
    new Auto(1, "modelo 2", 15000, colores_modelo2, interiores_modelo2),
    new Auto(2, "modelo 3", 20000, colores_modelo3, interiores_modelo3),
    new Auto(3, "modelo 4", 25000, colores_modelo4, interiores_modelo4)
];

/**************************************************
CREO LOS AUTOS Y OPCIONES PARA C/U (interiores, colores) - FIN
**************************************************/

/**************************************************
INTERACCIÓN
**************************************************/
/*
//pido opciones 
let opciones = [];
alert("MODELOS"+"\n"+generarLista(autos)); //muestro lista de autos
opciones.push(pedirOpc(0, autos.length, "MODELO")); //inserto modelo seleccionado al arreglo de opciones - lo hago con push para utilizarlo 
//obtengo seleccionados uso find porque siempre va a ser uno (y utilizar funciones de alto orden)
let autoSeleccionado = autos.find((item) => item.id === opciones[0]); //me quedo con el auto seleccionado

alert("COLORES"+"\n"+generarLista(autoSeleccionado.colores));
opciones.push(pedirOpc(0, autoSeleccionado.colores.length, "COLOR"));
let colorSeleccionado = autoSeleccionado.colores.find((item) => item.id === opciones[1]); //me quedo con el color seleccionado

alert("INTERIORES"+"\n"+generarLista(autoSeleccionado.interiores));
opciones.push(pedirOpc(0, autoSeleccionado.interiores.length, "INTERIOR"));
let interiorSeleccionado    = autoSeleccionado.interiores.find((item) => item.id === opciones[2]); //me quedo con el interior seleccionado


//muestro el resumen de lo seleccionado
alert(obtenerMensajeResumen(autoSeleccionado, colorSeleccionado, interiorSeleccionado));
*/

//obtengo el ID del padre donde voy a agregar los modelos (es un div con id modelsContainer)
let padre = document.getElementById("modelsContainer");


for (const item of autos) {
    let modelo = document.createElement("label");
    modelo.innerHTML += `<input type="radio" name="model" value="${item.id}">
                          <img class="image image-l" src="./PreEntrega3Sanguinet/${item.colores[0].imgB}">`;//por alguna razon no sabe en donde estoy parado y le tengo que agregar que entre a  la carpeta de preentrega3
    padre.appendChild(modelo);
    console.log(item.id +"-"+item.colores[0].imgB);
       

}

//parrafo.innerHTML = ""

/**************************************************
INTERACCIÓN - FIN
**************************************************/