let autos = JSON.parse(localStorage.getItem("autos")); //obtengo los autos del local storage

/**************************************************
FUNCIONES PARA CARGAR DOM, LIMPIAR, AGREGAR EVENTOS 
**************************************************/
//FUNCION PARA CARGAR evento click en las img de modelo
function cargarEventoModelos(autos) {
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
                    let src = "";
                    (item.id === parseInt(opcModelo) && itemImg.id === "carPreview-perfil") && (src = item.colores[0].imgB);
                    (item.id === parseInt(opcModelo) && itemImg.id === "carPreview-frente") && (src = item.colores[0].imgC);
                    item.id === parseInt(opcModelo) && itemImg.setAttribute("src", `./PreEntrega3-Sanguinet/${src}`);           
                });     
            }
            cargarOpciones(autos, opcModelo);
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

const cargarOpciones = (autos, modeloSel) => {
    //PRE CARGO INTERIORES    
    //obtengo el ID del padre donde voy a agregar los modelos (es un div con id modelsContainer)
    let padre = document.getElementById("modelsContainer");  
    
    if (modeloSel === 0) { //solo si el modelo seleccionado es el 0 vuelvo a cargar los modelos (para intentar optimizar la carga)
        //CARGO MODELOS
        autos.forEach((item) => {
            let modelo = document.createElement("label");
            modelo.innerHTML += `<input type="radio" name="model" value="${item.id}" id="inputModel${item.id}">
                        <img class="image image-l" src="./PreEntrega3-Sanguinet/${item.colores[0].imgB}" id="imgModel${item.id}">`;//por alguna razon no sabe en donde estoy parado y le tengo que agregar que entre a  la carpeta de preentrega3
            padre.appendChild(modelo);
        });
    }

    //CARGO INTERIORES
    padre = document.getElementById("interiorContainer");
    padre.innerHTML = "";
    autos[modeloSel].interiores.forEach((item) =>{
        let interior = document.createElement("label");
        interior.innerHTML += `<input type="radio" name="interior" value="${item.id}">
                            <img class="image image-m" src="./PreEntrega3-Sanguinet/${item.imgA}">`;//por alguna razon no sabe en donde estoy parado y le tengo que agregar que entre a  la carpeta de preentrega3
        padre.appendChild(interior);  
    });

    //CARGO COLORES
    padre = document.getElementById("colorContainer");
    padre.innerHTML = "";
    autos[modeloSel].colores.forEach((item) => { 
        let color = document.createElement("label");
        color.innerHTML += `<input type="radio" name="color" id ="${item.id}" value="${item.id}">
                            <img class="image image-s" src="./PreEntrega3-Sanguinet/${item.imgA}" alt="${item.nombre}">`;//por alguna razon no sabe en donde estoy parado y le tengo que agregar que entre a  la carpeta de preentrega3
        padre.appendChild(color);   
    });
   
    //CARGO CAR PREVIEW (img de la izq de perfil y frente)
    padre = document.getElementById("car-preview"); //como no creo un un tag y solo agrego img a este car preview no tengo que hacer un create element, solo le cambio el inner HTML        
    padre.innerHTML = `<img class="image-xl" src="./PreEntrega3-Sanguinet/${autos[modeloSel].colores[0].imgB}" alt="${autos[modeloSel].colores[0].nombre}" id = "carPreview-perfil">`;
    padre.innerHTML += `<img class="image-xl" src="./PreEntrega3-Sanguinet/${autos[modeloSel].colores[0].imgC}" alt="${autos[modeloSel].colores[0].nombre}" id = "carPreview-frente">`;

    //cargo evento click a modelos interiores y colores 
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
FUNCIONES PARA CARGAR DOM, LIMPIAR, AGREGAR EVENTOS - FIN 
**************************************************/

/**************************************************
EVENTOS (otros eventos para botones y modals)
**************************************************/

//CONSULTAR 
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
    cargarOpciones(autos, 0); //cargo todas las opciones
    cargarEventoModelos(autos); //cargo los eventos
}

/**************************************************
EVENTOS (otros eventos para botones y modals) - FIN
**************************************************/

/**************************************************
CARGA DE DOM
**************************************************/
cargarOpciones(autos, 0);
cargarEventoModelos(autos);

/**************************************************
CARGA DE DOM - FIN
**************************************************/