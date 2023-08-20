import { autos } from "./main.js"; //importo la coleccion de autos
/**************************************************
FUCNIONES
**************************************************/

function calcularTotal(...numero) {//los .. hace que se le pueda pasar cualquier cantidad de parm, lo transforma en un array
  let suma = 0;
  numero.map(x => suma += x); //sumo TODOS los items del array 
  return suma;
}
//COSNTRUCTOR RESUMEN (para usar consutrctores)
class Resumen { 
  constructor(nomModelo,precioModelo, nomColor, imgColor, imgPerfil, precioColor, nomInterior,imgInterior,precioInterior) {        
    this.nomModelo = nomModelo;
    this.precioModelo = precioModelo; 
    this.nomColor = nomColor; 
    this.imgColor = imgColor; 
    this.imgPerfil = imgPerfil; 
    this.precioColor = precioColor; 
    this.nomInterior = nomInterior; 
    this.imgInterior = imgInterior; 
    this.precioInterior = precioInterior;  
    this.precioTotal = calcularTotal(precioModelo, precioColor, precioInterior);
  }         
}

function obtenerAutoSeleccionado() {     
  const seleccionado = autos.find((auto) => auto.id === parseInt(sessionStorage.getItem("modelo"))) || console.log("array vacio"); 
  return seleccionado; //devuelvo el auto seleciconado
}
function resumenAutoSeleccionado(auto) {
  //desestructuro auto
  const {
    nombre:nomModelo,
    precio:precioModelo
  } = auto; 
  
  const color = auto.colores[parseInt(sessionStorage.getItem("color"))];
  const interior = auto.interiores[parseInt(sessionStorage.getItem("interior"))];
  
  //desestructuro color
  const {
    nombre: nomColor,
    imgA: imgColor,
    imgB: imgPerfil,
    precio: precioColor
  } = color;

  //desesctructuro interior
  const {
    nombre: nomInterior,
    imgA: imgInterior,   
    precio: precioInterior
  } = interior;

  //creo objeto resumen con los datos que necesitaria para el modal y/o pdf
  const autoResumen = new Resumen(
    nomModelo,precioModelo, nomColor, imgColor, imgPerfil, precioColor, nomInterior, imgInterior, precioInterior   
  )
  return autoResumen;
}
/**************************************************
FUCNIONES - FIN
**************************************************/
/**************************************************

/**************************************************
EVENTOS (otros eventos para botones y modals)
**************************************************/
//Obtengo el btn consultar
const btnConsultar = document.getElementById("consultar");

//CONSULTAR
//Agrego evento click para que abra el modal (tengo que agregarle que cargue cosas)
btnConsultar.onclick = function () {
  const autoSel = obtenerAutoSeleccionado(); 
  const autoResumen = resumenAutoSeleccionado(autoSel);
  //console.log(autoResumen);
  modal.style.display = "block";    

  let padre = document.getElementById("modal-content");
  padre.innerHTML = "";
  let resumen = document.createElement("div");
  resumen.innerHTML =  
                      `<table>                      
                      <tr>
                        <th>Categoría</th>
                        <th>Seleccionado</th>
                        <th>Precio</th>
                      </tr>
                      <tr>
                        <td class="my-2">Modelo</td>
                        <td class="my-2">${autoResumen.nomModelo}</td>
                        <td class="my-2">$${autoResumen.precioModelo}</td>
                      </tr> 
                      <tr>
                        <td class="my-2">Interior</td>
                        <td class="my-2">${autoResumen.nomInterior}</td>
                        <td class="my-2">$${autoResumen.precioInterior}</td>
                      </tr> 
                      <tr>
                        <td class="my-2">Color</td>
                        <td class="my-2">${autoResumen.nomColor}</td>
                        <td class="mt-2">$${autoResumen.precioColor}</td>
                      </tr> 
                      <tr>
                        <td class="bold my-2">Total</td>
                        <td class="my-2"</td>
                        <td class="bold my-2">$${autoResumen.precioTotal}</td>
                      </tr>                        
                    </table> 
                     <div class="flex-container mt-5">                   
                        <button id="modal-cerrar" class="btn btn-outline btn-flex btn-secondary">Cerrar</button>
                        <button id="modal-aceptar" class="btn btn-outline btn-flex btn-primary">Aceptar</button>                     
                     </div>`                
                       
    //le creo los eventos click a los botones
    padre.appendChild(resumen);
    const cerrar = document.getElementById("modal-cerrar");
    cerrar.addEventListener('click', () => {
      modal.style.display = "none";
    });

    const aceptar = document.getElementById("modal-aceptar");
  aceptar.addEventListener('click', () => {
    descargarPDF(autoResumen);
      modal.style.display = "none";
    });
}

let modal = document.getElementById("modalConsultar");
// para que si clickea fuera del modal tambien se cierra
window.onclick = function (event) {
  //Obtengo el ID del modal(ventana emergente)  
  event.target == modal && (modal.style.display = "none");
}

/**************************************************
EVENTOS (otros eventos para botones y modals) - FIN
**************************************************/


/**************************************************
IMPRESION PDF
**************************************************/
function descargarPDF(autoResumen) { 
  window.jsPDF = window.jspdf.jsPDF;
  let doc = new jsPDF();
  let y = 15; //coordenada y de pdf
  let x = 15; //coordenada x de pdf
  doc.text("AUDIX simulador", x, y);
  doc.line(15, 20, 180, 20); //line(x1, y1, x2, y2, style)
  x += 10;
  y += 15;
  doc.text(`Modelo ${autoResumen.nomModelo}`, x, y); //.text(texto, x, y, opciones)
  y += 10;
  doc.text(`Color ${autoResumen.nomColor}`, x, y);
  y += 10;
  doc.text(`Interior ${autoResumen.nomInterior}`, x, y);
  let imgData = `data:image/WEBP,${autoResumen.imgPerfil} `;
  doc.addImage(imgData,"WEBP", 15, 20, 180, 20);
  
  /*doc.text(`Modelo ${autoResumen.nomModelo}`, x, y);
  doc.text(`Modelo ${autoResumen.nomModelo}`, x, y);*/
 
 
 
  doc.save("a4.pdf");
  
}
