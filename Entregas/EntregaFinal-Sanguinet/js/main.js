/*export const autos = JSON.parse(localStorage.getItem("autos")); //obtengo los autos del local storage, con el export lo puedo usar en logica-interaccion.js

*/
/*esto sustituye lo de arriba, ahora se obtiene con un request a un json*/
const obtenerAutosFetch = async () => {
    try {
        if (!JSON.parse(localStorage.getItem("autos"))){ //si autos esta vacio (en local storage)
            const response = await fetch("./db/autos.json"); //obtengo del json simulando api
            const listaAutos = await response.json();          
            localStorage.setItem("autos", JSON.stringify(listaAutos));//lo cargo en localStorage            
        }
    } catch (error) { 
        console.log(error);
    }
}
export function obtenerAutos(){
    obtenerAutosFetch()
        .then(() => {
            const autos = JSON.parse(localStorage.getItem("autos")); //obtengo la lista de autos del local storage   
            if (sessionStorage.getItem("modelo")) {                
                cargarOpciones(autos, 0); //si le paso algo diferente a 0 rompe
                cargarEventoModelos(autos);
                console.log(sessionStorage.getItem("modelo"));
                
            } else {
                
                cargarOpciones(autos, 0); //cargo todas las opciones
                cargarEventoModelos(autos); //cargo los eventos 
                
            }           
        });
}

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
                    item.id === parseInt(opcModelo) && itemImg.setAttribute("src", `./EntregaFinal-Sanguinet/${src}`);           
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
function cargarEvento(categoria, autos){ 
    let padre = document.getElementById(categoria+"Container");
    let input = padre.getElementsByTagName("input");  //obtengo los inputs de colores
    for (let item of input) {        
        item.addEventListener('click', () => {           
            sessionStorage.setItem(categoria, item.value);           
            if (categoria === "color") { //no uso operador avanzado porque es mucho codigo, 
                //esto es para setear las IMG del preview del costado izquierdo (perfil y frente)       
                let modelo = sessionStorage.getItem("modelo");
                let color = sessionStorage.getItem("color");                
                padre = document.getElementById("car-preview");                
                padre.innerHTML = `<img class="image-xl" src="./EntregaFinal-Sanguinet/${autos[modelo].colores[color].imgB}" alt="${autos[modelo].colores[color].nombre}" id = "carPreview-perfil">`;
                padre.innerHTML += `<img class="image-xl" src="./EntregaFinal-Sanguinet/${autos[modelo].colores[color].imgC}" alt="${autos[modelo].colores[color].nombre}" id = "carPreview-frente">`;
            }
        });
    }
}

const cargarOpciones = (autos, modeloSel) => {       
    //PRE CARGO INTERIORES    
    //obtengo el ID del padre donde voy a agregar los modelos (es un div con id modelsContainer)
    let padre = document.getElementById("modelsContainer");  
    //padre.innerHTML = '';
    if (modeloSel === 0) { //por alguna razon esto funciona solo si esta dentro del if..
        padre.innerHTML = '';
        //solo si el modelo seleccionado es el 0 vuelvo a cargar los modelos (para intentar optimizar la carga)
        //CARGO MODELOS        
        autos.forEach((item) => {
            let modelo = document.createElement("label");
            modelo.innerHTML += `<input type="radio" name="model" value="${item.id}" id="inputModel${item.id}">
                        <img class="image image-l" src="./EntregaFinal-Sanguinet/${item.colores[0].imgB}" id="imgModel${item.id}">`;//por alguna razon no sabe en donde estoy parado y le tengo que agregar que entre a  la carpeta de preentrega3
            padre.appendChild(modelo);
        });
       
  }

    sessionStorage.setItem("modelo", 0);
       sessionStorage.setItem("color", 0);
    sessionStorage.setItem("interior", 0);    
    
    //CARGO INTERIORES
    padre = document.getElementById("interiorContainer");
    padre.innerHTML = "";
    autos[modeloSel].interiores.forEach((item) =>{
        let interior = document.createElement("label");
        interior.innerHTML += `<input type="radio" name="interior" value="${item.id}">
                            <img class="image image-m" src="./EntregaFinal-Sanguinet/${item.imgA}">`;//por alguna razon no sabe en donde estoy parado y le tengo que agregar que entre a  la carpeta de preentrega3
        padre.appendChild(interior);  
    });

    //CARGO COLORES
    padre = document.getElementById("colorContainer");
    padre.innerHTML = "";
    autos[modeloSel].colores.forEach((item) => { 
        let color = document.createElement("label");
        color.innerHTML += `<input type="radio" name="color" id ="${item.id}" value="${item.id}">
                            <img class="image image-s" src="./EntregaFinal-Sanguinet/${item.imgA}" alt="${item.nombre}">`;//por alguna razon no sabe en donde estoy parado y le tengo que agregar que entre a  la carpeta de preentrega3
        padre.appendChild(color);   
    });
   
    //CARGO CAR PREVIEW (img de la izq de perfil y frente)
    padre = document.getElementById("car-preview"); //como no creo un un tag y solo agrego img a este car preview no tengo que hacer un create element, solo le cambio el inner HTML        
    padre.innerHTML = `<img class="image-xl" src="./EntregaFinal-Sanguinet/${autos[modeloSel].colores[0].imgB}" alt="${autos[modeloSel].colores[0].nombre}" id = "carPreview-perfil">`;
    padre.innerHTML += `<img class="image-xl" src="./EntregaFinal-Sanguinet/${autos[modeloSel].colores[0].imgC}" alt="${autos[modeloSel].colores[0].nombre}" id = "carPreview-frente">`;

    //cargo evento click a modelos interiores y colores 
    cargarEvento("interior", autos);
    cargarEvento("color", autos);
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
    sessionStorage.setItem("modelo", 0);
    sessionStorage.setItem("color", 0);
    sessionStorage.setItem("interior", 0);
}
//RESTABLECER
//Obtengo el id del boton restablecer
const btnRestablecer = document.getElementById("restablecer");
btnRestablecer.onclick = function () { 
    limpiar(); //borro todo el contenido de modelos, preview, colores, interiores y luego lo vuelvo a precargar  
    obtenerAutos();
}


/**************************************************
FUNCIONES PARA CARGAR DOM, LIMPIAR, AGREGAR EVENTOS - FIN 
**************************************************/


/**************************************************
CARGA DE DOM
**************************************************/

obtenerAutos();
   


/**************************************************
CARGA DE DOM - FIN
**************************************************/