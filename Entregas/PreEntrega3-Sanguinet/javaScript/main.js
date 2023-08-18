/*IDEA GENERAL DEL PROY
Simulador de precios según opciones seleccionadas (modelo, llantas, colores, interiores) de ciertos autos.
Cada modelo tendría diferentes opciones, seleccionaría cada item y debería actualizar dinámicamente las opciones/ img en la página 

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

//calcula el total dados 3 objetos que contienen precio - ver si se usa
function calcularTotal(auto, color, interior) {     
    return auto.precio + color.precio + interior.precio;   
};

//Carga opciones de interiores y colores según modelo seleciconado
function cargarOpciones(modelo) {
    //CARGO INTERIORES
    let padre = document.getElementById("interiorContainer");    
    padre.innerHTML = ""; //borro lo que tenia cargado    
    autos[modelo].interiores.forEach((item) => { //recorro interiores del modelo seleccionado
        let interior = document.createElement("label"); 
        interior.innerHTML = `<input type="radio" name="interior" value="${item.id}">
                            <img class="image image-m" src="./PreEntrega3-Sanguinet/${item.imgA}">`;//por alguna razon no sabe en donde estoy parado y le tengo que agregar que entre a  la carpeta de preentrega3        
        padre.appendChild(interior);  
        cargarEvento("interior");   
    });

    //CARGO COLORES    
    padre = document.getElementById("colorContainer");
    padre.innerHTML = "";
    autos[modelo].colores.forEach((item) => {//colores del modelo seleccionado 
        let color = document.createElement("label"); 
        color.innerHTML = `<input type="radio" name="color" id ="${item.id}" value="${item.id}">
                            <img class="image image-s" src="./PreEntrega3-Sanguinet/${item.imgA}" alt="${item.nombre}">`;//por alguna razon no sabe en donde estoy parado y le tengo que agregar que entre a  la carpeta de preentrega3        
        padre.appendChild(color);   
        cargarEvento("color");
    });
 };

//FUNCION PARA CARGAR evento click en las img de modelo
function cargarEventoModelos() {
    //obtengo el html que contiene los modelos
    let listaModelos = document.getElementById("modelsContainer");
    //obtengo las img/input del html que contiene los modelos
    let input = listaModelos.getElementsByTagName("input");    
    for (let item of input) { //recorro las img/input para agregarle un evento        
        item.addEventListener('click', () => {                         
            let opcModelo = item.value //obtengo el valor numerico
            //tomo el html que contiene las img del preview
            let listaPreview = document.getElementById("car-preview");
            //tomo solo las img
            let imgPreview = listaPreview.getElementsByTagName("img");    
            //recorro los tags img
            for (let itemImg of imgPreview) {
                //le cambio el atributo src  
                autos.forEach((item) => { //recorro los autos
                    //si el modelo del auto coincide con el seleccionado Y el item que estoy es el de perfil asigno la img de perfil (src)
                    //si el modelo del auto coincide con el seleccionado Y el item que estoy es el de perfil asigno la img de frente (src)
                    //luego si el modelo del auto coincide con el seleccionado le seteo el src
                    console.log(item.id);
                    (item.id === parseInt(opcModelo) && itemImg.id === "carPreview-perfil") && (src = item.colores[0].imgB);
                    (item.id === parseInt(opcModelo) && itemImg.id === "carPreview-frente") && (src = item.colores[0].imgC);
                    item.id === parseInt(opcModelo) && itemImg.setAttribute("src", `./PreEntrega3-Sanguinet/${src}`);                   
                    /*  esta logica es reemplazado con lo de arriba para cumplir con la entrega (operadores avanzados)
                   if (itemAuto.id === parseInt(opcModelo)) {
                       if (itemImg.id == "carPreview-perfil") {
                           src = itemAuto.colores[0].imgB;
                       } else if (itemImg.id = "carPreview-frente") {
                           src = itemAuto.colores[0].imgC;
                       }                        
                       itemImg.setAttribute("src", `./PreEntrega3-Sanguinet/${src}`);
                   }*/
                });     
            }
            cargarOpciones(opcModelo);
            //guardo lo seleccionado en session para luego poder usarlo en el calulcar precio! me evito pelear con los checked de cada opcion
            sessionStorage.setItem("modelo", opcModelo);
            sessionStorage.setItem("color", 0); //cuando cargo los colores del modelo lo seteo a 0 por defecto
            sessionStorage.setItem("interior", 0);//cuando cargo los colores del modelo lo seteo a 0 por defecto
        }
    )
    }      
};

//CARGAR evento interior o color, le paso categoría (TIENE QUE SER EXACTO como el container  - palabra container ej interior o color), es diferente a modelos porque es mas sencillo
function cargarEvento(categoria){ 
    let padre = document.getElementById(categoria+"Container");
    let input = padre.getElementsByTagName("input");  //obtengo los inputs de colores
    for (let item of input) {        
        item.addEventListener('click', () => {           
            sessionStorage.setItem(categoria, item.value);
            if (categoria === "color") { //no uso operador avanzado porque es mucho codigo                
                let modelo = sessionStorage.getItem("modelo");
                let color = sessionStorage.getItem("color");               
                padre = document.getElementById("car-preview");                
                padre.innerHTML = `<img class="image-xl" src="./PreEntrega3-Sanguinet/${autos[modelo].colores[color].imgB}" alt="${autos[modelo].colores[color].nombre}" id = "carPreview-perfil">`;
                padre.innerHTML += `<img class="image-xl" src="./PreEntrega3-Sanguinet/${autos[modelo].colores[color].imgC}" alt="${autos[modelo].colores[color].nombre}" id = "carPreview-frente">`;
            }
        });
    }
}

//PRECARGAR TODO POR DEFECTO (se usa en el start y en restablecer)
function precargar() {
    //PRE CARGO INTERIORES    
    //obtengo el ID del padre donde voy a agregar los modelos (es un div con id modelsContainer)
    let padre = document.getElementById("modelsContainer");  
    
    //PRE CARGO MODELOS
    autos.forEach((item) => { 
        let modelo = document.createElement("label");
        modelo.innerHTML += `<input type="radio" name="model" value="${item.id}" id="inputModel${item.id}">
                            <img class="image image-l" src="./PreEntrega3-Sanguinet/${item.colores[0].imgB}" id="imgModel${item.id}">`;//por alguna razon no sabe en donde estoy parado y le tengo que agregar que entre a  la carpeta de preentrega3
        padre.appendChild(modelo);
    });

    //PRE CARGO INTERIORES
    padre = document.getElementById("interiorContainer");
    autos[0].interiores.forEach((item) =>{
        let interior = document.createElement("label");
        interior.innerHTML += `<input type="radio" name="interior" value="${item.id}">
                            <img class="image image-m" src="./PreEntrega3-Sanguinet/${item.imgA}">`;//por alguna razon no sabe en donde estoy parado y le tengo que agregar que entre a  la carpeta de preentrega3
        padre.appendChild(interior);  
    });

    //PRE CARGO COLORES
    padre = document.getElementById("colorContainer");
    autos[0].colores.forEach((item) => { 
        let color = document.createElement("label");
        color.innerHTML += `<input type="radio" name="color" id ="${item.id}" value="${item.id}">
                            <img class="image image-s" src="./PreEntrega3-Sanguinet/${item.imgA}" alt="${item.nombre}">`;//por alguna razon no sabe en donde estoy parado y le tengo que agregar que entre a  la carpeta de preentrega3
        padre.appendChild(color);   
    });
   
    //PRE CARGO CAR PREVIEW
    padre = document.getElementById("car-preview"); //como no creo un un tag y solo agrego img a este car preview no tengo que hacer un create element, solo le cambio el inner HTML    
    padre.innerHTML += `<img class="image-xl" src="./PreEntrega3-Sanguinet/${autos[0].colores[0].imgB}" alt="${autos[0].colores[0].nombre}" id = "carPreview-perfil">`;
    padre.innerHTML += `<img class="image-xl" src="./PreEntrega3-Sanguinet/${autos[0].colores[0].imgC}" alt="${autos[0].colores[0].nombre}" id = "carPreview-frente">`;
    
    //cargo evento click a modelos interiores y colores
    cargarEventoModelos();
    cargarEvento("interior");
    cargarEvento("color");
};

//LIMPIA todo lo seleccionado para luego precargar
function limpiar() { 
    let padre = document.getElementById("modelsContainer");
    padre.innerHTML = "";
    padre = document.getElementById("interiorContainer");
    padre.innerHTML = "";
    padre = document.getElementById("colorContainer");
    padre.innerHTML = "";
    padre = document.getElementById("car-preview"); 
    padre.innerHTML = "";
}

/**************************************************
FUNCIONES - FIN
**************************************************/

/**************************************************
EVENTOS (otros eventos que no agregué dentro de las funciones)
**************************************************/
// CONSULTAR 
//Obtengo el ID del modal(ventana emergente)
let modal = document.getElementById("modalConsultar");

//Obtengo el btn consultar
var btnConsultar = document.getElementById("consultar");

//Obtngo el span para cerrar
var spanClose = document.getElementsByClassName("close")[0];

//Agrego evento click para que abra el modal (tengo que agregarle que cargue cosas)
btnConsultar.onclick = function() {
    modal.style.display = "block";    
}

//Para que cuando le den click al span de cerrar se cierre el span
spanClose.onclick = function() {
  modal.style.display = "none";
}

// para que si clickea fuera del modal tambien se cierra
window.onclick = function (event) {
    event.target == modal && (modal.style.display = "none");
}
/*el codigo de arriba con op avanzado lo sustituye
window.onclick = function(event) {
  event.target == modal &&
    modal.style.display = "none";
  }
}*/

//RESTABLECER 
//Obtengo el id del boton restablecer
let btnRestablecer = document.getElementById("restablecer");
btnRestablecer.onclick = function () { 
    limpiar(); //borro todo el contenido de modelos, preview, colores, interiores y luego lo vuelvo a precargar 
    precargar();
}
/**************************************************
EVENTOS - FIN
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
        "../media/cars/e_tron_R8/perfil/3.webp",
        "../media/cars/e_tron_R8/frente/3.webp"),
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
LOGICA DE PRECARGA
**************************************************/
precargar();
/**************************************************
LOGICA DE PRECARGA - FIN
**************************************************/