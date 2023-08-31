
/**************************************************
FUCNIONES
**************************************************/

function calcularTotal(...numero) {//los .. hace que se le pueda pasar cualquier cantidad de parm, lo transforma en un array
  let suma = 0;
  numero.map(x => suma += x); //sumo TODOS los items del array 
  return suma;
}
//COSNTRUCTOR RESUMEN (para usar constructores)
class Resumen { 
  constructor(nomModelo,precioModelo, nomColor, imgColor, imgPerfil, precioColor, nomInterior,imgInterior,precioInterior) {        
    this.nomModelo      = nomModelo;
    this.precioModelo   = precioModelo; 
    this.nomColor       = nomColor; 
    this.imgColor       = imgColor; 
    this.imgPerfil      = imgPerfil; 
    this.precioColor    = precioColor; 
    this.nomInterior    = nomInterior; 
    this.imgInterior    = imgInterior; 
    this.precioInterior = precioInterior;  
    this.precioTotal    = calcularTotal(precioModelo, precioColor, precioInterior);
  }         
}
//obtiene el auto seleccionado desde un id en session y una coleccion de autos que se le pase
function obtenerAutoSeleccionado() {   
  //poniendo aca la obtencion de los autos desde local storage ya no rompe, al tenerlo al incio se caia porque aún no ejecutaba "obtenerAutos del main si hacía un localStorage.clear"
  const autos = JSON.parse(localStorage.getItem("autos"));  //por problemas con ajax y las constantes lo obtengo de localstorage en vez de la constante desde main
  const seleccionado = autos.find((auto) => auto.id === parseInt(sessionStorage.getItem("modelo"))) || console.log("array vacio"); 
  return seleccionado; //devuelvo el auto seleciconado
}
//obtiene y devuelve el resumen del auto seleccionado (nombre, precio, colores, img..) 
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
//Agrego evento click para que abra el modal
btnConsultar.onclick = function () {
  const autoSel = obtenerAutoSeleccionado(); 
  const autoResumen = resumenAutoSeleccionado(autoSel);

  modal.style.display = "block";    

  let padre = document.getElementById("modal-content");
  padre.innerHTML = "";

  let resumen = document.createElement("div");
  resumen.innerHTML =  
                      `<table id = "tabla-resumen">    
                      <thead>                  
                        <tr>
                          <th>Categoría</th>
                          <th>Seleccionado</th>
                          <th>Precio</th>
                        </tr>
                      </thead>
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
                        <button id="modal-descargar" class="btn btn-outline btn-flex btn-primary">Obtener PDF</button>                     
                     </div>`               
                       
    //le creo los eventos click a los botones
    padre.appendChild(resumen);
    const cerrar = document.getElementById("modal-cerrar");
    cerrar.addEventListener('click', () => {
      modal.style.display = "none";
    });

    const aceptar = document.getElementById("modal-descargar");
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
  const doc = new jsPDF();

  let img = new Image();

  img.src = `./EntregaFinal-Sanguinet/${autoResumen.imgColor}`; //asi funciona, se le pasa la ruta de la img
  doc.addImage(img, 'JPEG', 157, 100, 40, 40); //addimage (img, x, y, width, height, alias, compresion, rotacion)

  img.src = `./EntregaFinal-Sanguinet/${autoResumen.imgInterior}`; //asi funciona, se le pasa la ruta de la img
  doc.addImage(img, 'JPEG', 157, 145, 40, 40); 

  img.src = `./EntregaFinal-Sanguinet/${autoResumen.imgPerfil}`; 
  doc.addImage(img, 'JPEG', 15, 100, 137, 85); 

  let y = 15; //coordenada y de pdf
  let x = 15; //coordenada x de pdf
  doc.setFontSize(32); //Si quiero cambiar el tamaño de fuente lo tengo que hacer antes de el text (y luego volver a cambiar en caso de que no quiera seguir con ese tamaño)
  doc.text("Simulador AUDIX", x, y);
 
  x += 10;
  y += 20;

  doc.autoTable({
    html: '#tabla-resumen', //si obtengo tabla de html le pongo el id de esta
    startY: y, //donde comenzar la tabla eje Y
    styles: {
      fontSize: 14, //tamaño fuente
      cellWidth: 'wrap' 
    },
    theme: 'striped', //tema de la tabla 'striped'|'grid'|'plain'
    headStyles: { //estilos de cabezales
      fillColor: [0, 0, 0]  //negro, solo sirve rgb
    }

  }); //toma la tabla del id que le diga, autotablela deja bien armada

  doc.line(15, 270, 200, 270); //line(x1, y1, x2, y2, style) dibuja linea
  let fecha = new Date();  
  doc.setFontSize(10);
  doc.text(fecha.toLocaleString(), 160, 280); 
  doc.output('dataurlnewwindow'); //esto abre en una pestaña nueva
  //doc.save('table.pdf'); //esto lo guarda
} 


